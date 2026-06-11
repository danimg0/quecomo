import ThemedModal from '@/components/common/ThemedModal';
import ThemedText from '@/components/common/ThemedText';
import ThemedView from '@/components/common/ThemedView';
import { useAuth } from '@/hooks/auth/useAuth';
import { ThemePreference, useSettingsStore } from '@/store/useSettingsStore';
import { Colors } from '@/utils/constants';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { router, Stack } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Linking, Pressable, ScrollView, View } from 'react-native';

const PRIVACY_URL =
  'https://quecomobackend-production.up.railway.app/privacy';

type RowProps = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress?: () => void;
};

const SettingRow = ({ icon, label, onPress }: RowProps) => (
  <Pressable
    onPress={onPress}
    disabled={!onPress}
    className="w-full flex-row items-center justify-between rounded-lg bg-white dark:bg-neutral-900 p-4"
  >
    <View className="flex-row items-center gap-x-4">
      <View className="rounded-full bg-orange-100 dark:bg-neutral-800 p-3">
        <Ionicons name={icon} color={Colors.primary} size={20} />
      </View>
      <ThemedText variant="h3" className="font-normal">
        {label}
      </ThemedText>
    </View>
    {onPress ? (
      <Ionicons name="chevron-forward" size={20} color={Colors.muted} />
    ) : null}
  </Pressable>
);

// Opciones del selector de tema
const THEME_OPTIONS: {
  value: ThemePreference;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
}[] = [
  { value: 'system', label: 'Sistema', icon: 'phone-portrait-outline' },
  { value: 'light', label: 'Claro', icon: 'sunny-outline' },
  { value: 'dark', label: 'Oscuro', icon: 'moon-outline' },
];

const ThemeSelector = () => {
  const theme = useSettingsStore((s) => s.theme);
  const setTheme = useSettingsStore((s) => s.setTheme);

  return (
    <View className="w-full rounded-lg bg-white dark:bg-neutral-900 p-4 gap-4">
      <View className="flex-row items-center gap-x-4">
        <View className="rounded-full bg-orange-100 dark:bg-neutral-800 p-3">
          <Ionicons name="color-palette-outline" color={Colors.primary} size={20} />
        </View>
        <ThemedText variant="h3" className="font-normal">
          Tema
        </ThemedText>
      </View>

      <View className="flex-row gap-2">
        {THEME_OPTIONS.map((option) => {
          const selected = theme === option.value;
          return (
            <Pressable
              key={option.value}
              onPress={() => setTheme(option.value)}
              className={`flex-1 items-center gap-1 rounded-lg p-3 ${
                selected
                  ? 'bg-primary'
                  : 'bg-orange-100 dark:bg-neutral-800'
              }`}
            >
              <Ionicons
                name={option.icon}
                size={18}
                color={selected ? 'white' : Colors.primary}
              />
              <ThemedText
                className={`text-sm ${
                  selected ? 'text-white font-bold' : ''
                }`}
              >
                {option.label}
              </ThemedText>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

const SettingsScreen = () => {
  const { isAuthenticated, user, logout, deleteAccount } = useAuth();
  const [modalVisible, setModalVisible] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const onConfirmDelete = async () => {
    try {
      setDeleting(true);
      await deleteAccount();
      setModalVisible(false);
      router.replace('/home');
    } catch {
      Alert.alert(
        'Error',
        'No se pudo eliminar la cuenta. Inténtalo de nuevo.'
      );
    } finally {
      setDeleting(false);
    }
  };

  return (
    <ThemedView className="flex-1">
      {/* Pantalla normal del Stack: header con flecha de volver */}
      <Stack.Screen options={{ headerShown: true, title: 'Ajustes' }} />
      <ScrollView contentContainerClassName="p-4 gap-3">
        {/* Datos de la cuenta */}
        {isAuthenticated && user ? (
          <View className="rounded-lg bg-white dark:bg-neutral-900 p-4">
            <ThemedText variant="h3">{user.username}</ThemedText>
            <ThemedText className="text-gray-500 dark:text-gray-400">
              {user.email}
            </ThemedText>
          </View>
        ) : null}

        {/* Tema de la app */}
        <ThemeSelector />

        {/* Opciones generales */}
        <SettingRow
          icon="shield-checkmark-outline"
          label="Política de privacidad"
          onPress={() => Linking.openURL(PRIVACY_URL)}
        />
        <SettingRow
          icon="information-circle-outline"
          label={`Versión ${Constants.expoConfig?.version ?? '1.0.0'}`}
        />

        {isAuthenticated ? (
          <SettingRow
            icon="log-out-outline"
            label="Cerrar sesión"
            onPress={logout}
          />
        ) : null}

        {/* Eliminar cuenta — discreto */}
        {isAuthenticated ? (
          <Pressable
            onPress={() => setModalVisible(true)}
            className="mt-10 self-center p-2"
          >
            <ThemedText className="text-xs text-gray-400 dark:text-gray-500 underline">
              Eliminar cuenta
            </ThemedText>
          </Pressable>
        ) : null}
      </ScrollView>

      <ThemedModal
        visible={modalVisible}
        title="¿Seguro que quieres eliminar tu cuenta?"
        message="Esta acción es permanente. Se borrarán tu cuenta y tus recetas favoritas."
        confirmText="Eliminar cuenta"
        cancelText="Cancelar"
        destructive
        loading={deleting}
        onConfirm={onConfirmDelete}
        onCancel={() => setModalVisible(false)}
      />
    </ThemedView>
  );
};

export default SettingsScreen;
