import "./SocialButtons.css";

export default function SocialButtons({ images = [], links = [] }) {
  return (
    <div className="socialButtons">
      {images.map((img, index) => (
        <a
          key={index}
          href={links[index]}
          target="_blank"
          rel="noopener noreferrer"
          className="socialButton social-bubble"
          style={{ opacity: 0 }}
        >
          <img src={img} alt={`social-${index}`} />
        </a>
      ))}
    </div>
  );
}
