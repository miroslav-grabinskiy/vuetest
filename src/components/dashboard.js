import axios from "axios";
import router from "../router";

export default {
  name: "Dashboard",
  data () {
    return {
      user: {
        name: "Jesse"
      }
    };
  },
  methods: {
    getUserData: function () {
      let self = this;
      axios.get("/api/user")
        .then((response) => {
          console.log(response);
          self.$set(this, "user", response.data.user);
        })
        .catch((errors) => {
          console.log(errors);
          router.push("/");
        });
    }
  },
  mounted () {
    this.getUserData();
  }
};