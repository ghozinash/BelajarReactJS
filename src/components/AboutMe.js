import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About Me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim fugit
            suscipit placeat quam dolore dolorem expedita natus perspiciatis
            tempore in et laudantium, eius odit? Cumque rem quia iusto neque
            adipisci libero iure, mollitia provident atque accusamus eum, minus
            illo consequatur qui molestiae vero at ab, tenetur cupiditate cum
            nemo laudantium! Doloribus unde eaque repellendus placeat maiores
            tempora recusandae minus saepe excepturi impedit adipisci obcaecati
            atque reiciendis numquam non incidunt, aut odio, magnam alias
            perferendis quo dolorum! Alias itaque quasi omnis provident quisquam
            id! Totam officiis corporis delectus quos aut vero, rem deleniti.
            Recusandae quis illo aliquid quam qui voluptates, dolor laboriosam
            similique, praesentium ipsa amet esse! Aspernatur necessitatibus
            quos eum deleniti error incidunt non qui sunt ad facere, voluptatem
            enim ipsa voluptatibus impedit aperiam quis minima dolorem tenetur
            modi consequatur. Voluptas ullam provident quo placeat quae et
            incidunt facere dolor tempora vero porro, praesentium, beatae
            quisquam. Molestiae minus facilis itaque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
