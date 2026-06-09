import ThemedModal from '@/components/common/ThemedModal';
import ThemedText from '@/components/common/ThemedText';
import ThemedView from '@/components/common/ThemedView';
import { useAuth } from '@/hooks/auth/useAuth';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { router } from 'expo-router';
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
    className="w-full flex-row items-center justify-between rounded-lg bg-white p-4"
  >
    <View className="flex-row items-center gap-x-4">
      <View className="rounded-full bg-orange-100 p-3">
        <Ionicons name={icon} color="#f97316" size={20} />
      </View>
      <ThemedText variant="h3" className="font-normal">
        {label}
      </ThemedText>
    </View>
    {onPress ? (
      <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
    ) : null}
  </Pressable>
);

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
    <ThemedView safe className="flex-1">
      <ScrollView contentContainerClassName="p-4 gap-3">
        {/* Datos de la cuenta */}
        {isAuthenticated && user ? (
          <View className="rounded-lg bg-white p-4">
            <ThemedText variant="h3">{user.username}</ThemedText>
            <ThemedText className="text-gray-500">{user.email}</ThemedText>
          </View>
        ) : null}

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
            <ThemedText className="text-xs text-gray-400 underline">
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
