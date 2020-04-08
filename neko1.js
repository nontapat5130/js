.p-movie__pickup {
  position: relative;
  z-index: 1;
  -webkit-transform: scale(1);
          transform: scale(1);
  margin-bottom: 75px;
  cursor: pointer;
}

.p-movie__pickup-img {
  position: relative;
  width: 1000px;
  height: 590px;
  margin: 20px auto 24px;
  background: url(https://lh3.googleusercontent.com/quoZ8uHHIP3O1I097-5punLiqhvRr9OQE9Rnw01NF_4ppKu3oje-yKFZljY9n8zNecc-IDDdrjPE8ytwNGZAtjYiMlSkRzwW22vaj1RoP8PexxcHMCmMnlTdCgku-jsAqyX23ZZxwH8SoWWV5txLPkgNK45kOj3Ggmy0QeVzIVia1KZJgRd7FjS6Ipo4Hzi9rdf1cb2zQ2KZNc4d4X9coqFLmtdvbXs8m4BbXWGX-FrN8Swp_1Ut15HepQ1xOP8PLgePIJNtjFQLKw-TmGqKWpPGW868P5GHpWqgtSe601Y2S3aJjmV297QZkwLe-ynkl5swnMY2QdXBb3bZrIFq1R0B_1i2H8xAvHlo999qlOlFRKQ2xCQOX9XjyyWJpN1jh7SGJV6vJD5oRoAGnYq9oF5RAc-fuPTcn6OxNRMjWraQTqHO_ZCTf1QH1YpVKQgdc9_rvXcv5vFOp7e2gmOAgCiU_SS0NMkirT8d17AMF4cMe3waZDfdXjCo83ZiaTHBklLyd3dcFVeuadU59rTB5rh4gavHDZPrUTTGRFPol-yYTm1uMPaoS_eDOdg2F_0THEVRAfQkAd2WzlV6b5Mp9LydCAWPhzDJ9gNCnCLPYZQ645-PlzqqgIknvYfPJkWJUKK2RhgaVXfJwdStW_bqIy1gGTMAxGYNhr8jxF0CySumNcj-0r28NdMVfElXFtu1mepI9w=w1490-h929-ft) no-repeat center center;
  background-size: contain;
}

.p-movie__pickup-img-inner {
  position: absolute;
  top: 26px;
  right: 26px;
  bottom: 26px;
  left: 26px;
  background: no-repeat center center;
  background-size: cover;
}

.p-movie__pickup-deco-img {
  position: absolute;
  left: 50%;
  z-index: -1;
  -webkit-transform: translate(-50%, 0);
          transform: translate(-50%, 0);
}

.p-movie__pickup-deco-img--1 {
  top: -23px;
  width: 64px;
  margin-left: -195px;
}

.p-movie__pickup-deco-img--2 {
  top: -23px;
  width: 64px;
  margin-left: 195px;
}

.p-movie__pickup-deco-img--3 {
  bottom: -70px;
  width: 84px;
  margin-left: 342px;
}

.p-movie__pickup-deco-img--3 img {
  -webkit-transform-origin: left top;
          transform-origin: left top;
}

.p-movie__pickup-title {
  width: 533px;
  margin: 0 auto;
  padding: 18px 0;
  background-color: #fcdb4f;
  border-radius: 10px;
  font-size: 16px;
  line-height: 1.3;
  letter-spacing: .04em;
}

.p-movie__stamp {
  position: absolute;
  top: -30px;
  right: -30px;
}

.p-movie__list {
  width: 1000px;
  margin: 0 auto;
  font-size: 0;
  letter-spacing: -.4em;
  text-align: left;
}

.p-movie__list > * {
  font-size: 16px;
  letter-spacing: normal;
}

.p-movie__item {
  display: inline-block;
  -webkit-transform: scale(1);
          transform: scale(1);
  width: 270px;
  vertical-align: top;
  cursor: pointer;
}

.p-movie__img {
  position: relative;
  height: 160px;
  margin-bottom: 17px;
  background-color: #000000;
  border-radius: 1px;
  -webkit-box-shadow: 3px 3px 5px 3px rgba(157, 156, 148, .3);
          box-shadow: 3px 3px 5px 3px rgba(157, 156, 148, .3);
}

.p-movie__img-inner {
  position: absolute;
  top: 1px;
  right: 1px;
  bottom: 1px;
  left: 1px;
  background: no-repeat center center;
  background-size: cover;
}

.p-movie__title {
  font-size: 16px;
  line-height: 1.3;
  letter-spacing: .04em;
  text-align: center;
}

@media screen and (min-width: 751px) {
  .p-movie__pickup:hover {
    -webkit-animation: hover-bounce 1000ms linear 0s both;
            animation: hover-bounce 1000ms linear 0s both;
  }
  .p-movie__item:hover {
    -webkit-animation: hover-bounce 1000ms linear 0s both;
            animation: hover-bounce 1000ms linear 0s both;
  }
  .p-movie__item {
    margin-right: 40px;
  }
  .p-movie__item:nth-child(3n + 1) {
    margin-left: 54px;
  }
  .p-movie__item:nth-child(3n) {
    margin-right: 0;
  }
  .p-movie__item:nth-child(n + 4) {
    margin-top: 40px;
  }
}

@media screen and (max-width: 750px) {
  .p-movie__pickup {
    left: 50%;
    -webkit-transform: translate(-50%, 0);
            transform: translate(-50%, 0);
    width: 365px;
    margin-bottom: 30px;
  }
  .p-movie__pickup-img {
    width: 360px;
    height: 226px;
    margin: 2px auto -5px;
    background-image: url(https://lh3.googleusercontent.com/quoZ8uHHIP3O1I097-5punLiqhvRr9OQE9Rnw01NF_4ppKu3oje-yKFZljY9n8zNecc-IDDdrjPE8ytwNGZAtjYiMlSkRzwW22vaj1RoP8PexxcHMCmMnlTdCgku-jsAqyX23ZZxwH8SoWWV5txLPkgNK45kOj3Ggmy0QeVzIVia1KZJgRd7FjS6Ipo4Hzi9rdf1cb2zQ2KZNc4d4X9coqFLmtdvbXs8m4BbXWGX-FrN8Swp_1Ut15HepQ1xOP8PLgePIJNtjFQLKw-TmGqKWpPGW868P5GHpWqgtSe601Y2S3aJjmV297QZkwLe-ynkl5swnMY2QdXBb3bZrIFq1R0B_1i2H8xAvHlo999qlOlFRKQ2xCQOX9XjyyWJpN1jh7SGJV6vJD5oRoAGnYq9oF5RAc-fuPTcn6OxNRMjWraQTqHO_ZCTf1QH1YpVKQgdc9_rvXcv5vFOp7e2gmOAgCiU_SS0NMkirT8d17AMF4cMe3waZDfdXjCo83ZiaTHBklLyd3dcFVeuadU59rTB5rh4gavHDZPrUTTGRFPol-yYTm1uMPaoS_eDOdg2F_0THEVRAfQkAd2WzlV6b5Mp9LydCAWPhzDJ9gNCnCLPYZQ645-PlzqqgIknvYfPJkWJUKK2RhgaVXfJwdStW_bqIy1gGTMAxGYNhr8jxF0CySumNcj-0r28NdMVfElXFtu1mepI9w=w1490-h929-ft);
  }
  .p-movie__pickup-img-inner {
    top: 26px;
    right: 25px;
    bottom: 24px;
    left: 25px;
  }
  .p-movie__pickup-deco-img--1 {
    top: -5px;
    width: 38px;
    margin-left: -75px;
  }
  .p-movie__pickup-deco-img--2 {
    top: -5px;
    width: 38px;
    margin-left: 75px;
  }
  .p-movie__pickup-deco-img--3 {
    bottom: -19px;
    width: 45px;
    margin-left: 132px;
  }
  .p-movie__pickup-title {
    width: 260px;
    padding: 14px 0;
    border-radius: 5px;
    font-size: 13px;
    line-height: 1.3;
    letter-spacing: .04em;
  }
  .p-movie__stamp {
    top: -26px;
    right: -24px;
  }
  .p-movie__list {
    width: 100%;
    max-width: 375px;
    margin: 0 auto;
  }
  .p-movie__item {
    width: 43%;
  }
  .p-movie__item:nth-child(2n + 1) {
    margin-right: 4%;
    margin-left: 5%;
  }
  .p-movie__item:nth-child(n + 3) {
    margin-top: 5%;
  }
  .p-movie__img {
    -webkit-box-shadow: 3px 3px 5px 1px rgba(157, 156, 148, .3);
            box-shadow: 3px 3px 5px 1px rgba(157, 156, 148, .3);
  }
  .p-movie__img {
    height: auto;
    margin-bottom: 6px;
    padding-top: 59%;
  }
  .p-movie__img-inner {
    top: 1px;
    right: 1px;
    bottom: 1px;
    left: 1px;
  }
  .p-movie__title {
    font-size: 13px;
    line-height: 1.3;
    letter-spacing: .04em;
  }
}

@media screen and (max-width: 750px) and (max-width: 345px) {
  .p-movie__stamp {
    right: -10px;
  }
}
