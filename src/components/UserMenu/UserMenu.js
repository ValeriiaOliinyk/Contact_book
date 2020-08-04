import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './sauropod.png';
import { ReactComponent as LogOutIcon } from './logout.svg';
import BtnHelper from '../BtnHelper';
import './UserMenu.scss';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className="User__container">
    <img src={avatar} alt="avatar" className="User__avatar" />
    <span className="User__name">Welcome, {name}</span>
    <BtnHelper type="button" onClick={onLogout}>
      <LogOutIcon width="23" height="23" fill="white" />
    </BtnHelper>
  </div>
);
const mapStateToProps = state => ({
  name: authSelectors.getUsername(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
