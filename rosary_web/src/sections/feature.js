/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import Smart from "assets/feature/smart.svg";
import Audio from "assets/feature/audio.png";
import Prayer from "assets/feature/prayer.png";
import Prayer2 from "assets/feature/pray2.png";
import Photo from "assets/feature/photo.png";
import Song from "assets/feature/song.png";
import Reflect from "assets/feature/reflection.png";
import Sleep from "assets/feature/sleep.png";
import Request from "assets/feature/request.png";
import Group from "assets/feature/group.png";
import Winner from "assets/feature/winner.svg";
import Cloud from "assets/feature/cloud.svg";
import Setting from "assets/feature/setting.svg";
import Design from "assets/feature/design.svg";
import Chat from "assets/feature/chat.svg";

const data = [
  {
    id: 1,
    imgSrc: Prayer,
    altText: "Smart",
    title: "Catholic Prayers",
    text: "This section provides a comprehensive collection of traditional Catholic prayers, including the Our Father, Hail Mary, Glory Be, and other essential prayers of the Catholic faith.",
  },
  {
    id: 2,
    imgSrc: Prayer2,
    altText: "Performance",
    title: "General Prayers",
    text: "Universal Daily Devotions: Inclusive Prayers for Catholics and People of All Faiths, Offering Comfort, Reflection, and Guidance in Everyday Life. Embrace the Power of Prayer, Regardless of Your Religious Background.",
  },
  {
    id: 3,
    imgSrc: Audio,
    altText: "Content",
    title: "Rosary Audio",
    text: "Experience a rich and immersive prayer experience with audio guidance for reciting the Rosary. Follow along with clear and soothing voices, creating a meditative atmosphere.",
  },
  {
    id: 4,
    imgSrc: Song,
    altText: "Customization",
    title: "Songs and Music",
    text: "Enhance your spiritual journey with a curated selection of Christian songs and instrumental music. Whether for worship, reflection, or inspiration, these tunes create a soul-stirring ambiance.",
  },
  {
    id: 5,
    imgSrc: Request,
    altText: "Prayer Request",
    title: "Prayer Request",
    text: "Allow users to submit their personal prayer requests within the app. These intentions can be private or shared with a community of fellow believers, fostering a sense of support and unity in prayer.",
  },
  {
    id: 6,
    imgSrc: Sleep,
    altText: "Deep Sleep Music",
    title: "Deep Sleep Music",
    text: "Provide a collection of calming and spiritually uplifting music tracks designed to help users relax, find peace, and experience a restful night's sleep.",
  },
  {
    id: 7,
    imgSrc: Reflect,
    altText: "Mystery Reflection",
    title: "Mystery Reflection",
    text: "Delve deeper into the mysteries of the Rosary with insightful reflections accompanying each prayer bead. These reflections encourage contemplation and a deeper understanding of the Rosary's significance.",
  },
  {
    id: 8,
    imgSrc: Photo,
    altText: "Unique Mystery Photos",
    title: "Unique Mystery Photos",
    text: "Allow users to submit their personal prayer requests within the app. These intentions can be private or shared with a community of fellow believers, fostering a sense of support and unity in prayer.",
  },
  {
    id: 9,
    imgSrc: Group,
    altText: "Community Forum",
    title: "Community Forum",
    text: "Engage with a vibrant online community of fellow believers. Post prayer intentions, share reflections, and support one another in faith and spiritual growth.",
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: "section.feature" }}>
      <Container>
        <SectionHeader
          slogan="Quality features"
          title="Meet exciting feature of app"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      "37px 0",
      null,
      "45px 30px",
      null,
      "50px 30px",
      null,
      null,
      "90px 70px",
    ],
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
  },
};
