import React from 'react';
import Page from '../layouts/main';
import Login from '../components/login';

export default () => (
  <Page>
    <div className="container-full welcomeContainer">
      <div className="row">
        <div className="center-block text-center">
          <h1 className="welcomeText">
            Spotify Playlist Manager
          </h1>
        </div>
      </div>
      <div className="container">
        <div className="center-block text-center">
          <Login />
        </div>
      </div>
    </div>
    <div className="container-full welcomeAboutUsContainer">
      <div className="container welcomeAboutUsInnerContainer">
        <div className="row">
          <div className="center-block text-center welcomeAboutText">
            <h3>
              Spotify Playlist Manager is an app built to ... <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit sem quis accumsan imperdiet. Cras porta rutrum dignissim. Praesent vitae sem quis est aliquam auctor. Phasellus congue nec tortor vitae efficitur. Ut gravida tortor eget ligula fermentum semper. Cras vel mauris massa. Quisque et nunc ligula. Duis malesuada tempor eros, non laoreet dolor vulputate eget. Sed sollicitudin id nulla non molestie. Phasellus luctus libero fermentum purus sodales, in posuere arcu sagittis. Duis pulvinar dolor non tincidunt vulputate.
            </h3>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="center-block text-center">
            <h4> <b> FAQ </b> </h4>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-6">
            <p> <b> Question 1? </b> </p>
          </div>
          <div className="col-md-6">
            <p> <b> Question 2? </b> </p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-6">
            <p>
              Praesent quis finibus tellus. Etiam sodales interdum libero, ut efficitur sapien lacinia at. Nullam rhoncus et quam id porta. Fusce quis lectus felis. Aenean ut diam gravida, elementum est at, blandit ligula. Nam rutrum mollis tellus, nec egestas urna efficitur eget. Nullam vel ultrices arcu. Suspendisse finibus condimentum dolor vel ullamcorper. Donec at urna erat. Integer a rhoncus sem. Maecenas sodales magna vitae elit blandit interdum. In dui felis, ornare eget nibh id, elementum gravida nulla. Praesent vitae vulputate ex. Sed sed ligula quis mi varius semper. Morbi ut mauris fermentum, dapibus nisi sit amet, aliquet elit. Suspendisse id arcu et leo vulputate fermentum vel nec sapien.
            </p>
          </div>
          <div className="col-md-6">
            <p>
              Mauris mollis nibh leo. Ut consectetur placerat nunc, id scelerisque velit bibendum eu. Nulla et bibendum augue, a faucibus ligula. Quisque sagittis diam sit amet commodo volutpat. Nunc vitae metus id lorem feugiat vehicula. Pellentesque est augue, porttitor bibendum sodales sit amet, malesuada ac ante. Nulla consequat imperdiet enim. Aliquam egestas aliquam elit eleifend pharetra. Nam varius eget sapien quis rhoncus. Integer aliquam iaculis nunc tincidunt pharetra. Ut id tortor commodo, lobortis risus ut, aliquet nunc.
            </p>
          </div>
        </div>
       <div className="row text-center">
          <div className="col-md-6">
            <p> <b> Question 3? </b> </p>
          </div>
          <div className="col-md-6">
            <p> <b> Question 4? </b> </p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-6">
            <p>
              Praesent quis finibus tellus. Etiam sodales interdum libero, ut efficitur sapien lacinia at. Nullam rhoncus et quam id porta. Fusce quis lectus felis. Aenean ut diam gravida, elementum est at, blandit ligula. Nam rutrum mollis tellus, nec egestas urna efficitur eget. Nullam vel ultrices arcu. Suspendisse finibus condimentum dolor vel ullamcorper. Donec at urna erat. Integer a rhoncus sem. Maecenas sodales magna vitae elit blandit interdum. In dui felis, ornare eget nibh id, elementum gravida nulla. Praesent vitae vulputate ex. Sed sed ligula quis mi varius semper. Morbi ut mauris fermentum, dapibus nisi sit amet, aliquet elit. Suspendisse id arcu et leo vulputate fermentum vel nec sapien.
            </p>
          </div>
          <div className="col-md-6">
            <p>
              Mauris mollis nibh leo. Ut consectetur placerat nunc, id scelerisque velit bibendum eu. Nulla et bibendum augue, a faucibus ligula. Quisque sagittis diam sit amet commodo volutpat. Nunc vitae metus id lorem feugiat vehicula. Pellentesque est augue, porttitor bibendum sodales sit amet, malesuada ac ante. Nulla consequat imperdiet enim. Aliquam egestas aliquam elit eleifend pharetra. Nam varius eget sapien quis rhoncus. Integer aliquam iaculis nunc tincidunt pharetra. Ut id tortor commodo, lobortis risus ut, aliquet nunc.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Page>
);
