import { h } from 'preact';

export const Profile = ({ image, alt, name, title }) => {

    return  <div class="col xs-12 sm-6 md-4 profile">
    <picture>
        <img class="profile__image" alt={alt} src={image}/>
    </picture>
    <div class="profile__name">{name}</div>
    <div class="profile__title">{title}</div>
</div>

}

export default Profile;