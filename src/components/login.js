import router from "../router";
import axios from "axios";

export default {
  name: "Login",
  methods: {
    login: (e) => {
      e.preventDefault();
      let email = e.target.elements.email.value;
      const password = e.target.elements.password.value;

      email = "[user@email.com](mailto:user@email.com)";
      const login = () => {
        const data = {
          email,
          password
        };

        axios.post("/api/login", data)
          .then((response) => {
            console.log("Logged in");
            router.push("/dashboard");
          })
          .catch((errors) => {
            console.log("Cannot log in");
          });
      };
      login();
    }
  }
};
