import { Input, Button, Image } from "@rneui/base";
import React from "react";
import { Alert, ImageBackground, StyleSheet, View } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "expo-router";
import { Link } from "expo-router";

const mockCredentials = {
  email: "teste@exemplo.com",
  password: "123456",
};

export const Loginscreen: React.FC = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
      password: Yup.string()
        .min(6, "A senha deve ter pelo menos 6 caracteres")
        .required("Senha é obrigatória"),
    }),
    onSubmit: (values) => {
      if (values.email === mockCredentials.email && values.password === mockCredentials.password) {
        Alert.alert("Login bem-sucedido", "Bem-vindo!", [
          {
            text: "OK",
            onPress: () => router.push("/menu"), 
          },
        ]);
      } else {
        Alert.alert("Erro de Login", "Usuário ou senha inválidos.");
      }
    },
  });

  return (
    <ImageBackground
      source={require("../assets/img/ultimatum.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          source={require("../assets/img/poe2logo.png")}
          style={styles.logo}
        />

        <Input
          placeholder="Digite seu Email"
          leftIcon={{ name: "email", color: "white" }}
          inputStyle={{ color: "white" }}
          inputContainerStyle={styles.containerImput}
          value={formik.values.email}
          onChangeText={formik.handleChange("email")}
          onBlur={formik.handleBlur("email")}
          errorMessage={
            formik.touched.email && formik.errors.email ? formik.errors.email : ""
          }
        />

        <Input
          placeholder="Digite sua Senha"
          secureTextEntry
          leftIcon={{ name: "lock", color: "white" }}
          inputStyle={{ color: "white" }}
          inputContainerStyle={styles.containerImput}
          value={formik.values.password}
          onChangeText={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
          errorMessage={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : ""
          }
        />

        <Button
          title="Login"
          buttonStyle={styles.btnLogin}
          onPress={() => formik.handleSubmit()}
        />
        <Button title="Registre-se" buttonStyle={styles.btnLogin} onPress={() => router.push("/register")} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    padding: 10,
    justifyContent: "center",
  },
  background: {
    width: "100%",
    height: "100%",
  },
  btnLogin: {
    backgroundColor: "red",
    color: "white",
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  containerImput: {
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 30,
    padding: 5,
    marginBottom: 5,
  },
  logo: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
    marginBottom: 0,
  },
});

export default Loginscreen;