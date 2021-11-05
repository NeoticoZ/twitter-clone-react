import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  FollowAge,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Heriks Araujo</h1>
        <h2>@NeoticoZ</h2>

        <p>
          Developer at <a href="/">@Freelancer</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Senador Canedo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 12 de junho de 2000
          </li>
        </ul>

        <FollowAge>
          <span>
            <strong>94</strong> seguindo
          </span>
          <span>
            <strong>672</strong> seguidores
          </span>
        </FollowAge>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;