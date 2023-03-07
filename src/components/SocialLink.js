export default function SocialLink({ url, name, classes, icon: Icon }) {
  return (
    <a
      href={url}
      alt={`${name} link`}
      className={`flex gap-x-2 items-center px-2.5 md:px-3 py-2 rounded-md font-medium ${
        classes ? classes : ""
      }`}
      target="_blank"
    >
      <Icon size="20" />
      <span className="hidden md:inline">{name}</span>
    </a>
  );
}
