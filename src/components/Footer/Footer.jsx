import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div>
        <p>
          Mini Games Collection &copy;
          {new Date().getFullYear()} Created by{" "}
          <b>
            <i>liaopeichen </i>
          </b>
          <a
            href="https://github.com/liaopeichen"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </p>
      </div>
    </footer>
  );
}
