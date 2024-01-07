import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { useUser } from "../../providers/User";

import { HeaderProfileEdit } from "../HeaderProfileEdit";
import { HeaderMenu } from "../HeaderMenu";

import profilePicture from "../../assets/Images/Profile/profile-picture.png";
import { Container } from "./style";


export const Header = () => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openHover, setOpenHover] = useState(false);
  const { userInfo, getUserInfo } = useUser();
  const history = useHistory();

  const toggleEdit = () => {
    setOpenEdit(!openEdit);
  };

  const toggleHover = () => {
    setOpenHover(!openHover);
  };

  const { username } = userInfo;

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      <Container openHover={openHover}>
        <p className="logo" onClick={() => history.push("/")}>
          WeDo
        </p>
        <section className="menu__info">
          {!!username && (
            <p className="header__username">
              <span>@</span>
              {username}
            </p>
          )}
          <img
            className="profile"
            src={profilePicture}
            alt="Profile"
            onClick={toggleHover}
          />
          {openHover && (
            <HeaderMenu
              openEdit={openEdit}
              toggleEdit={toggleEdit}
              toggleHover={toggleHover}
            />
          )}
        </section>
      </Container>
      {openEdit && (
        <HeaderProfileEdit toggleEdit={toggleEdit} openEdit={openEdit} />
      )}
    </>
  );
};