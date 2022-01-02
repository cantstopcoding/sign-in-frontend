import { FormStyle } from "./styles";

const SignUpForm = () => {
  const signUp = (event) => {
    // contact API to signup
  };

  return (
    <FormStyle>
      <form onSubmit={signUp}>
        <label htmlFor="username">Username</label>
        <br />
        <input type="text" name="username" placeholder="username" />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" name="email" placeholder="email" />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input type="password" name="password" placeholder="password" />
        <br />
        <input type="submit" />
      </form>
    </FormStyle>
  );
};

export default SignUpForm;

//     t.string "name"
//     t.string "username"
//     t.string "password_digest"
//     t.datetime "created_at", precision: 6, null: false
//     t.datetime "updated_at", precision: 6, null: false
//     t.string "email"
