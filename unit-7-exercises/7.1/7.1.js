let imagesArray = [
  "https://64.media.tumblr.com/4a981a3043441a8c4c8d13208222f7f4/tumblr_phkozt6AB61vf93px_1280.jpg",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lionel-animals-to-follow-on-instagram-1568319926.jpg?crop=0.922xw:0.738xh;0.0555xw,0.142xh&resize=640:*",
  "https://www.rd.com/wp-content/uploads/2021/04/GettyImages-1145794687.jpg?fit=696,464",
  "https://i1.wp.com/www.dailycal.org/assets/uploads/2019/10/animals_wikimedia_cc-900x580.jpg",
  "https://pbs.twimg.com/profile_images/1353075738358910977/0N3HhghG_400x400.jpg",
  "https://www.verywellmind.com/thmb/8quBdAdGoHUYoLON4FDQwPnlZl0=/500x350/filters:no_upscale():max_bytes(150000):strip_icc()/iStock-619961796-edit-59cabaf6845b3400111119b7.jpg",
];

let counter = 0;
let previousImageSelected;
let scores = 0;
let failures = 0;

const isOdd = (num) => num % 2;

const changeImage = () => {
  $("img").click(function () {
    if (
      $(this).attr("src") ===
      "https://image.freepik.com/iconos-gratis/x-simbolo_318-1407.jpg"
    ) {
      counter++;
      const randomPosition = Math.floor(Math.random() * imagesArray.length);
      $(this).attr("src", imagesArray[randomPosition]);

      if (!isOdd(counter)) {
        if (previousImageSelected.attr("src") === $(this).attr("src")) {
          previousImageSelected.attr("class", "add-background");
          $(this).attr("class", "add-background");
          imagesArray = imagesArray.filter(
            (src) => src !== $(this).attr("src")
          );
          scores++;
          $("p#p-score").text(`You have scored: ${scores} times`);
        } else {
          previousImageSelected.attr(
            "src",
            "https://image.freepik.com/iconos-gratis/x-simbolo_318-1407.jpg"
          );
          $(this).attr(
            "src",
            "https://image.freepik.com/iconos-gratis/x-simbolo_318-1407.jpg"
          );
          failures++;
          $("p#p-fail").text(`You have failed: ${failures} times`);
        }
      }
      previousImageSelected = $(this);
    }
  });
};

function initialize() {
  changeImage();
}

$(document).ready(() => initialize());
