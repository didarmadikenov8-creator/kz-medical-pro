export const SmartImg = ({ src, alt = '', className = '', ...rest }) => (
  <img
    src={src}
    alt={alt}
    loading="lazy"
    className={className}
    onError={(e) => {
      if (!e.currentTarget.src.endsWith('/images/about-room.jpg')) {
        e.currentTarget.src = '/images/about-room.jpg';
      }
    }}
    {...rest}
  />
);
