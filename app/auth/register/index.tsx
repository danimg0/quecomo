import ThemedButton from '@/components/common/ThemedButton';
import ThemedSpinner from '@/components/common/ThemedSpinner';
import ThemedText from '@/components/common/ThemedText';
import ThemedTextInput from '@/components/common/ThemedTextInput';
import ThemedView from '@/components/common/ThemedView';
import { useAuth } from '@/hooks/auth/useAuth';
import { Image } from 'expo-image';
import { Link, Redirect } from 'expo-router';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
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
    if (errorMessage) Alert.alert('Error al crear la cuenta', errorMessage);
  }, [errorMessage]);

  // Redirect declarativo: seguro aunque el router aún no esté montado
  // (con useEffect + router.replace petaba al recargar con sesión guardada)
  if (isAuthenticated) {
    return <Redirect href="/home" />;
  }

  return isLoading ? (
    <ThemedSpinner fullScreen />
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
                source={require('@/assets/images/icon.png')}
                style={{ width: 80, height: 80, borderRadius: 50 }}
                contentFit="contain"
              />
              <ThemedText variant="h1" className="text-3xl font-bold">
                Crear cuenta
              </ThemedText>
              <ThemedText className="text-gray-500 dark:text-gray-400">
                Regístrate para guardar tus recetas favoritas
              </ThemedText>
            </View>

            <View className="flex-col gap-4 w-[90%] mb-5">
              {/* Nombre de usuario */}
              <Controller
                control={control}
                rules={{ required: true }}
                name="username"
                render={({ field: { onChange, onBlur, value } }) => (
                  <ThemedTextInput
                    placeholder="Nombre de usuario"
                    autoCapitalize="none"
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                  />
                )}
              />
              {errors.username && (
                <ThemedText className="text-red-500 text-sm">
                  Este campo es obligatorio.
                </ThemedText>
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
                  <ThemedTextInput
                    placeholder="Correo electrónico"
                    autoCapitalize="none"
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    keyboardType="email-address"
                  />
                )}
              />
              {errors.email && (
                <ThemedText className="text-red-500 text-sm">
                  Introduce un correo válido.
                </ThemedText>
              )}

              {/* Contraseña */}
              <Controller
                control={control}
                rules={{ required: true, minLength: 4 }}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                  <ThemedTextInput
                    placeholder="Contraseña"
                    autoCapitalize="none"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    secureTextEntry
                    value={value}
                  />
                )}
              />
              {errors.password && (
                <ThemedText className="text-red-500 text-sm">
                  Mínimo 4 caracteres.
                </ThemedText>
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
                  <ThemedTextInput
                    placeholder="Repetir contraseña"
                    autoCapitalize="none"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    secureTextEntry
                    value={value}
                  />
                )}
              />
              {errors.confirmPassword && (
                <ThemedText className="text-red-500 text-sm">
                  {errors.confirmPassword.message ||
                    'Este campo es obligatorio.'}
                </ThemedText>
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
