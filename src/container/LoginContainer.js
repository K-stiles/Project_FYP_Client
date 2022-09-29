import React, { useState } from "react";
import { Login } from "../components";

export default function LoginContainer() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <Login>
      <Login.Container>
        <Login.FormWrapper>
          <Login.Left>
            <Login.TopRow>
              <Login.SocialRow>
                <Login.SocialIconWrapper>
                  <Login.SocialIcon
                    src="/images/google_auth_icon.png"
                    alt="Google Icon"
                  />
                </Login.SocialIconWrapper>
                <Login.SocialText>Continue with Google</Login.SocialText>
              </Login.SocialRow>

              <Login.SocialRow>
                <Login.FBSocialIconWrapper>
                  <Login.FacebookSocialIcon
                    src="/images/facebook_auth_icon.png"
                    alt="Facebook Social Icon"
                  />
                </Login.FBSocialIconWrapper>
                <Login.SocialText>Continue with Facebook</Login.SocialText>
              </Login.SocialRow>
            </Login.TopRow>

            <Login.Form>
              <Login.Title>Login Account</Login.Title>
              <Login.Info>
                Please input your information in the fields below to enter your
                Journey platform.
              </Login.Info>

              <Login.InputLabel>Email</Login.InputLabel>
              <Login.InputWrapper>
                <Login.Input
                  type="text"
                  name="email"
                  placeholder="example@yourmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Login.InputWrapper>

              <Login.InputLabel>Password</Login.InputLabel>
              <Login.InputWrapper>
                <Login.Input
                  type="password"
                  name="password"
                  placeholder="*******"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Login.InputWrapper>

              <Login.Row>
                <Login.CheckboxLabel>Remember Me</Login.CheckboxLabel>
              </Login.Row>

              <Login.RegisterButton>Login</Login.RegisterButton>
              <Login.CheckboxLabel>
                Don't have an account yet? Register Here!
              </Login.CheckboxLabel>
            </Login.Form>
          </Login.Left>

          <Login.Right>
            <Login.BgImageWrapper>
              {/* <Login.BgImage src={"/images/authImage.png"} alt="bus" /> */}
            </Login.BgImageWrapper>
            <Login.Inner>
              {/* <Login.Holder>
                <Login.Image src={"/images/register_icon.png"} alt="icon" />
                <p>Welcome Back!</p>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <Login.SecondaryRegisterButton>
                  Sign In
                </Login.SecondaryRegisterButton>
                <Login.BusImage src={"/images/auth_bus.png"} alt="bus" />
              </Login.Holder> */}
            </Login.Inner>
          </Login.Right>
        </Login.FormWrapper>
      </Login.Container>
    </Login>
  );
}