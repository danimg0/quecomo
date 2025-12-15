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
  email: string;
  password: string;
};

const LoginScreen = () => {
  const {
    // es el objeto que conecta los inputs visuales con la logica interna de la libreria
    control,
    //verifica todo antes de ahcer el onSubmit real
    handleSubmit,
    // dice que campos fallaron
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { login, isLoading, errorMessage, isAuthenticated } = useAuth();

  //Solo llama la accion, no navega
  const onSubmit = async (data: FormData) => {
    await login(data.email, data.password);
  };

  useEffect(() => {
    if (isAuthenticated) router.replace('/home');
  }, [isAuthenticated]);

  useEffect(() => {
    if (errorMessage)
      Alert.alert('Error al iniciar sesion' /*  errorMessage  */);
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
          contentContainerClassName="flex-1 justify-center px-6 "
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
                Bienvenido
              </ThemedText>
              <ThemedText className="text-gray-500">
                Inicia sesión para continuar
              </ThemedText>
            </View>

            <View className="flex-col gap-4 w-[70%] mb-5">
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                  <View className=" bg-white border border-gray-100 p-4 rounded-lg shadow-sm">
                    {/* <View className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4"> */}
                    <TextInput
                      placeholder="Correo electrónico"
                      placeholderTextColor="#9CA3AF"
                      autoCapitalize="none"
                      value={value}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      keyboardType="email-address"
                      className="text-base text-gray-800 "
                    />
                  </View>
                )}
              />
              {errors.email && (
                <Text className="text-black">This is required.</Text>
              )}
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                  <View className=" bg-white border border-gray-100 p-4 rounded-lg shadow-sm">
                    <TextInput
                      placeholder="Contraseña"
                      autoCapitalize="none"
                      placeholderTextColor="#9CA3AF"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      secureTextEntry
                      value={value}
                      className="text-base text-gray-800 "
                    />
                  </View>
                )}
              />
              {errors.password && (
                <Text className="text-black">This is required.</Text>
              )}
            </View>

            {/* Botones */}
            <View className="flex-col gap-4 w-[70%]">
              {/* {isLoading ? (
            <ActivityIndicator size="large" color="orange" />
          ) : ( */}
              <ThemedButton
                color="primary"
                variant="contained"
                onPress={handleSubmit(onSubmit)} // handleSubmit se encarga de llamar a onSubmit
              >
                Iniciar sesión
              </ThemedButton>
              {/* )} */}

              <ThemedButton
                color="secondary"
                variant="text-only"
                onPress={() => router.replace('/home')} // Para saltar en desarrollo
              >
                Continuar como invitado
              </ThemedButton>
            </View>

            {/* Link registro */}
            <View className="flex-row justify-center mt-4">
              <ThemedText>¿No tienes cuenta? </ThemedText>
              <Link href="/auth/register" asChild>
                <ThemedText className="text-primary font-bold">
                  Regístrate
                </ThemedText>
              </Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ThemedView>
  );
};

export default LoginScreen;
