import React from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "../../components/Inputs/Input.js";
import { validateEmail } from "../../utils/helper";
import ProfilePhotoSelector from "../../components/Inputs/ProfilePhotoSelector";
import axiosInstance from "../../utils/axiosInstance.js";
import { API_PATHS } from "../../utils/apiPaths.js";
import { UserContext } from "../../context/UserContext.js";
import { uploadImage } from "../../utils/uploadImage";

const Signup = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { updateUser } = React.useContext(UserContext);

  const handleSignUp = async (e) => {
    e.preventDefault();

    // basic validations
    if (!fullName?.trim()) {
      setError("Please enter your name");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter the password");
      return;
    }

    setError(null);
    setLoading(true);

    try {
<<<<<<< Updated upstream
      let profileImageUrl = "";
=======
      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER)
>>>>>>> Stashed changes

      // upload image if present
      if (profilePic) {
        try {
          const imgUploadRes = await uploadImage(profilePic);
          profileImageUrl = imgUploadRes?.imageUrl || "";
        } catch (imgErr) {
          // image upload failed — you can decide to continue or abort
          console.warn("Image upload failed:", imgErr);
          // optionally set an error and return; for now we'll continue without image
        }
      }

      // signUp api call
      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        fullName: fullName.trim(),
        email: email.trim(),
        password,
        profileImageUrl,
      });

      const { token, user } = response?.data || {};

      if (token) {
        try {
          localStorage.setItem("token", token);
        } catch (lsErr) {
          console.warn("Could not access localStorage:", lsErr);
        }
        updateUser?.(user);
        navigate("/dashboard");
      } else {
        setError("Signup failed: no token returned.");
      }
    } catch (err) {
      if (err?.response?.data?.message) {
        setError(err.response.data.message);
      } else if (err?.message) {
        setError(err.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Create an Account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Join us today by entering your details below.
        </p>

        <form onSubmit={handleSignUp}>
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              value={fullName}
              onChange={({ target }) => setfullName(target.value)}
              label="Full Name"
              placeholder="Aayush Gupta"
              type="text"
            />

            <Input
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              label="Email Address"
              placeholder="siddhantkumar06448@gmail.com"
              type="text"
            />

            <div className="col-span-2">
              <Input
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                label="Password"
                placeholder="Min 8 Characters"
                type="password"
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "Signing up..." : "SIGN UP"}
          </button>

          <p className="text-[13px] text-slate-800 mt-3">
            Already have an account?{" "}
            <Link className="font-medium text-primary underline" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Signup;