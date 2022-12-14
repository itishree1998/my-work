import banner from "../../assets/home/truck5.jpg";

export const styles = {
  container: {
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: window.innerHeight,
    width: window.innerWidth,
    margin: 0,
    padding: 0,
  },
  bannerSection: {
    display: "flex",
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontWeight: 700,
    fontSize: "45px",
    lineHeight: "72px",
    textTransform: "capitalize",
    // marginRight: "500px",
  },
  span: {
    color: "#FE6714",
    fontSize: "70px",
  },
  titleForm: {
    color: "#fff",
    fontWeight: 700,
    fontSize: "28px",
    lineHeight: "72px",
    textTransform: "capitalize",
    textAlign: "left",
  },
  card: {
    background: "#3291a8",
  },
  formbox: {
    width: "80%",
    // height: "169px",
    background: "#141414",
    padding: "3px 25px 3px 25px",
    borderRadius: "18px",

    position: "absolute",
    marginTop: "10%",

    display: "block",
    // top: "785px",
    // left: "168px",
    // Radius: "18px",
    // padding: "20px, 41px, 20px, 41px",
    // justify: "space-between",
    // gap: "15px",
  },
  input: {
    backgroundColor: "#3D3D3D",
    color: "#fff",
    // marginTop: "20px",
    border: "none",
    borderRadius: "10px",
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: "35px",
    width: "100%",
  },
  dropdown: {
    // marginTop: "30px",
    marginBottom: "30px",
    background: "#3D3D3D",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "10px",
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: "35px",
  },
  button: {
    background: "#FE6714",
    border: "none",
    borderRadius: "10px",
    lineHeight: "35px",
    fontSize: "18px",
    fontWeight: 500,
  },
};
