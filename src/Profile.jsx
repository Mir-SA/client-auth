import React, {useState} from 'react';
import AuthAPI from './AuthAPI'
import Cookies from 'js-cookie'

const Profile = () => {
  const imgLink = 'https://bit.ly/3csg2OR'
  const [profile, setProfile] = useState(imgLink)
  const Auth = React.useContext(AuthAPI)

  const handleLogout = () => {
    Auth.setAuth(false)
    Cookies.remove('user')
  }

  const imgHandler = (e) => {
    const reader = new FileReader()
    reader.onload = () => {
      if(reader.readyState === 2) setProfile(reader.result)
    }
    reader.readAsDataURL(e.target.files[0])
  }

  return (
    <div>
      <h1>Profile</h1>
      <section className='profile'>
        <div className='image'>
          <img src={profile} />
          <input type='file' name='imgUpload' accept='image/*' onChange={imgHandler} />
        </div>

        
          <label htmlFor ='name'>Name </label>
          <input type='text' id='name'/>

          <label htmlFor="birthday">Birthday</label>
          <input type="date" id="birthday" />

          <label htmlFor="religion">Religion:</label>
          <select name="cars" id="religion">
            <option value="hindu">Hindu</option>
            <option value="sikh">Sikh</option>
            <option value="jain">Jain</option>
            <option value="christian">Christian</option>
            <option value="muslim">Muslim</option>
          </select>

          <label htmlFor ='height'>Height </label>
          <input type='number' id='height'/>
      
      </section>
      
      <button className='logout btn' onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;