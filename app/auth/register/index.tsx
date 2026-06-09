import ThemedButton from '@/components/common/ThemedButton';
import ThemedText from '@/components/common/ThemedText';
import ThemedView from '@/components/common/ThemedView';
import { useAuth } from '@/hooks/auth/useAuth';
import { Image } from 'expo-image';
import { Link, router } from 'expo-router';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';

type FormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterScreen = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const { register, isLoading, errorMessage, isAuthenticated } = useAuth();

  // Para validar que las dos contraseñas coinciden
  const password = watch('password');

  const onSubmit = async (data: FormData) => {
    await register(data.username, data.email, data.password);
  };

  useEffect(() => {
    if (isAuthenticated) router.replace('/home');
  }, [isAuthenticated]);

  useEffect(() => {
    if (errorMessage) Alert.alert('Error al crear la cuenta', errorMessage);
  }, [errorMessage]);

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <ThemedView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerClassName="flex-1 justify-center px-6"
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 justify-center gap-4 items-center">
            <View className="items-center mb-5 gap-4">
              <Image
                source={require('@/assets/images/react-logo.png')}
                style={{ width: 80, height: 80 }}
                contentFit="contain"
              />
              <ThemedText variant="h1" className="text-3xl font-bold">
                Crear cuenta
              </ThemedText>
              <ThemedText className="text-gray-500">
                Regístrate para guardar tus recetas favoritas
              </ThemedText>
            </View>

            <View className="flex-col gap-4 w-[70%] mb-5">
              {/* Nombre de usuario */}
              <Controller
                control={control}
                rules={{ required: true }}
                name="username"
                render={({ field: { onChange, onBlur, value } }) => (
                  <View className="bg-white border border-gray-100 p-4 rounded-lg shadow-sm">
                    <TextInput
                      placeholder="Nombre de usuario"
                      placeholderTextColor="#9CA3AF"
                      autoCapitalize="none"
                      value={value}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      className="text-base text-gray-800"
                    />
                  </View>
                )}
              />
              {errors.username && (
                <Text className="text-black">Este campo es obligatorio.</Text>
              )}

              {/* Email */}
              <Controller
                control={control}
                rules={{
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                }}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                  <View className="bg-white border border-gray-100 p-4 rounded-lg shadow-sm">
                    <TextInput
                      placeholder="Correo electrónico"
                      placeholderTextColor="#9CA3AF"
                      autoCapitalize="none"
                      value={value}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      keyboardType="email-address"
                      className="text-base text-gray-800"
                    />
                  </View>
                )}
              />
              {errors.email && (
                <Text className="text-black">Introduce un correo válido.</Text>
              )}

              {/* Contraseña */}
              <Controller
                control={control}
                rules={{ required: true, minLength: 4 }}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                  <View className="bg-white border border-gray-100 p-4 rounded-lg shadow-sm">
                    <TextInput
                      placeholder="Contraseña"
                      placeholderTextColor="#9CA3AF"
                      autoCapitalize="none"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      secureTextEntry
                      value={value}
                      className="text-base text-gray-800"
                    />
                  </View>
                )}
              />
              {errors.password && (
                <Text className="text-black">Mínimo 4 caracteres.</Text>
              )}

              {/* Confirmar contraseña */}
              <Controller
                control={control}
                rules={{
                  required: true,
                  validate: (value) =>
                    value === password || 'Las contraseñas no coinciden',
                }}
                name="confirmPassword"
                render={({ field: { onChange, onBlur, value } }) => (
                  <View className="bg-white border border-gray-100 p-4 rounded-lg shadow-sm">
                    <TextInput
                      placeholder="Repetir contraseña"
                      placeholderTextColor="#9CA3AF"
                      autoCapitalize="none"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      secureTextEntry
                      value={value}
                      className="text-base text-gray-800"
                    />
                  </View>
                )}
              />
              {errors.confirmPassword && (
                <Text className="text-black">
                  {errors.confirmPassword.message ||
                    'Este campo es obligatorio.'}
                </Text>
              )}
            </View>

            {/* Botón */}
            <View className="flex-col gap-4 w-[70%]">
              <ThemedButton
                color="primary"
                variant="contained"
                onPress={handleSubmit(onSubmit)}
              >
                Crear cuenta
              </ThemedButton>
            </View>

            {/* Link a login */}
            <View className="flex-row justify-center mt-4">
              <ThemedText>¿Ya tienes cuenta? </ThemedText>
              <Link href="/auth/login" asChild>
                <ThemedText className="text-primary font-bold">
                  Inicia sesión
                </ThemedText>
              </Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ThemedView>
  );
};

export default RegisterScreen;
