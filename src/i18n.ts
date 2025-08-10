import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      appName: "Gatekeeper",
      error: "Error",
      retry: "Retry",
      login: {
        title: "Welcome back!",
        subtitle: "Sign in to your account to continue",
        email: "Email",
        password: "Password",
        submit: "Sign in",
        emailIsRequired: "Please input your email",
        invalidEmail: "Please enter a valid email",
        passwordIsRequired: "Please input your password",
      },
      account: {
        title: "Account details",
        welcome: "Welcome",
        secondaryTitle: "See your account details below",
        subtitle: "Your personal information",
        firstName: "First name",
        lastName: "Last name",
        logout: "Logout",
      }
    }
  },
  de: {
    translation: {
      appName: "Gatekeeper",
      error: "Fehler",
      retry: "Erneut versuchen",
      login: {
        title: "Willkommen zurück!",
        subtitle: "Melde dich an, um fortzufahren",
        email: "E-Mail",
        password: "Passwort",
        submit: "Anmelden",
        emailIsRequired: "Bitte geben Sie Ihre E-Mail ein",
        invalidEmail: "Bitte geben Sie eine gültige E-Mail ein",
        passwordIsRequired: "Bitte geben Sie Ihr Passwort ein",
      },
      account: {
        title: "Kontodetails",
        welcome: "Willkommen",
        secondaryTitle: "Hier sehen Sie Ihre Kontodetails",
        subtitle: "Ihre persönlichen Informationen",
        firstName: "Vorname",
        lastName: "Nachname",
        logout: "Abmelden",
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
