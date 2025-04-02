import { Input, Button, Image } from "@rneui/base";
import React from "react";
import { Alert, ImageBackground, StyleSheet, View } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { router, useRouter } from "expo-router";

const Registerscreen: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("O usuário é obrigatório"),
      email: Yup.string()
        .email("E-mail inválido")
        .required("E-mail é obrigatório"),
      password: Yup.string()
        .min(6, "A senha deve ter pelo menos 6 caracteres")
        .required("Senha é obrigatória"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "As senhas não conferem")
        .required("Confirmação de senha é obrigatória"),
    }),
    onSubmit: (values) => {
      Alert.alert("Registro bem-sucedido", "Seja bem-vindo, " + values.username);
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
          placeholder="Digite seu Usuário"
          leftIcon={{ name: "person", color: "white" }}
          inputStyle={{ color: "white" }}
          inputContainerStyle={styles.containerImput}
          value={formik.values.username}
          onChangeText={formik.handleChange("username")}
          onBlur={formik.handleBlur("username")}
          errorMessage={
            formik.touched.username && formik.errors.username
              ? formik.errors.username
              : ""
          }
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
            formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ""
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

        <Input
          placeholder="Confirme sua Senha"
          secureTextEntry
          leftIcon={{ name: "lock", color: "white" }}
          inputStyle={{ color: "white" }}
          inputContainerStyle={styles.containerImput}
          value={formik.values.confirmPassword}
          onChangeText={formik.handleChange("confirmPassword")}
          onBlur={formik.handleBlur("confirmPassword")}
          errorMessage={
            formik.touched.confirmPassword && formik.errors.confirmPassword
              ? formik.errors.confirmPassword
              : ""
          }
        />

        <Button
          title="Registrar"
          buttonStyle={styles.btnLogin}
          onPress={() => formik.handleSubmit()}
        />
        <Button title="Login" buttonStyle={styles.btnLogin} onPress={() => router.push("")} />
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

export default Registerscreen;