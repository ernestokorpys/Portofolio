import React from "react";

const Tecnology = () => {
    const size = "48";
    const programmingLanguages = [
      [
        "Python",
        `https://img.icons8.com/color/${size}/python--v1.png`,
        "https://icons8.com/icon/13441/python",
      ],
      [
        "C++",
        `https://img.icons8.com/color/${size}/c-plus-plus-logo.png`,
        "https://icons8.com/icon/6RHskkZGRABM/c-plus-plus-logo",
      ],
      [
        "C",
        `https://img.icons8.com/color/${size}/c-programming.png`,
        "https://icons8.com/icon/40670/c-programming",
      ],
      [
        "JavaScript",
        `https://img.icons8.com/color/${size}/javascript--v1.png`,
        "https://icons8.com/icon/108784/javascript",
      ],
      [
        "Golang",
        `https://img.icons8.com/color/${size}/golang.png`,
        "https://icons8.com/icon/44442/golang",
      ],
    ];
  
    const webDesign = [
      [
        "HTML",
        `https://img.icons8.com/color/${size}/html-5--v1.png`,
        "https://icons8.com/icon/20909/html",
      ],
      [
        "CSS",
        `https://img.icons8.com/color/${size}/css3.png`,
        "https://icons8.com/icon/21278/css",
      ],
      [
        "React",
        `https://img.icons8.com/officel/${size}/react.png`,
        "https://icons8.com/icon/wPohyHO_qO1a/react",
      ],
      [
        "Vite",
        `https://img.icons8.com/fluency/${size}/vite.png`,
        "https://icons8.com/icon/6paIGl2LDcN4/vite",
      ],
      [
        "PHP",
        `https://img.icons8.com/external-those-icons-flat-those-icons/${size}/external-PHP-programming-and-development-those-icons-flat-those-icons.png`,
        "https://icons8.com/icon/YrKoPXb4jv9l/php",
      ],
      [
        "MySQL",
        `https://img.icons8.com/external-those-icons-flat-those-icons/${size}/external-MySQL-programming-and-development-those-icons-flat-those-icons.png`,
        "https://icons8.com/icon/rgPSE6nAB766/mysql",
      ],
      [
        "Bootstrap",
        `https://img.icons8.com/color-glass/${size}/bootstrap.png`,
        "https://icons8.com/icon/EzPCiQUqWWEa/bootstrap",
      ],
      [
        "Mongo DB",
        `https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/${size}/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png`,
        "https://icons8.com/icon/tBBf3P8HL0vR/mongodb-a-cross-platform-document-oriented-database-program",
      ],
    ];
  
    const programs = [
      [
        "Arduino",
        `https://img.icons8.com/color/${size}/arduino.png`,
        "https://icons8.com/icon/13444/arduino",
      ],
      [
        "PLC",
        `https://img.icons8.com/fluency/${size}/programming-logic-controller.png`,
        "https://icons8.com/icon/bQbX7tMYRcoT/plc",
      ],
      [
        "Visual Studio Code",
        `https://img.icons8.com/color/${size}/visual-studio-code-2019.png`,
        "https://icons8.com/icon/9OGIyU8hrxW5/visual-studio-code",
      ],
      [
        "MATLAB",
        `https://img.icons8.com/fluency/${size}/matlab.png`,
        "https://icons8.com/icon/r5Y16PcDkoWI/matlab",
      ],
      [
        "Sublime Text",
        `https://img.icons8.com/fluency/${size}/sublime-text.png`,
        "https://icons8.com/icon/6RHskkZGRABM/sublime-text",
      ],
    ];
  
    const miscellaneous = [
      [
        "GitHub",
        `https://img.icons8.com/ios-filled/${size}/github.png`,
        "https://icons8.com/icon/12599/github",
      ],
      [
        "Docker",
        `https://img.icons8.com/fluency/${size}/docker.png`,
        "https://icons8.com/icon/cdYUlRaag9G9/docker",
      ],
      [
        "MariaDB",
        `https://img.icons8.com/color/${size}/maria-db.png`,
        "https://icons8.com/icon/nrY6pkbRkJCi/mariadb",
      ],
      [
        "Grafana",
        `https://img.icons8.com/fluency/${size}/grafana.png`,
        "https://icons8.com/icon/9uVrNMu3Zx1K/grafana",
      ],
      [
        "Microsoft PowerPoint",
        `https://img.icons8.com/officel/${size}/microsoft-powerpoint-2019.png`,
        "https://icons8.com/icon/4qxQxFcFu3zS/microsoft-powerpoint-2019",
      ],
      [
        "Microsoft Word",
        `https://img.icons8.com/office/${size}/microsoft-word-2019.png`,
        "https://icons8.com/icon/q3phJprgwgr8/microsoft-word-2019",
      ],
      [
        "Microsoft Excel",
        `https://img.icons8.com/officel/${size}/ms-excel.png`,
        "https://icons8.com/icon/MLmDFgD6Aywl/microsoft-excel",
      ],
    ];
  
    const iconsinfo = [programmingLanguages, webDesign, programs, miscellaneous];
    const nameCategory = [
      "Programing Languages",
      "Web Design",
      "Software",
      "Miscellaneous",
    ];
  
    const renderTable = (sectionTitle, icons) => (
      <div className="icon-container">
        <h2>{sectionTitle}</h2>
        <table>
          {icons.map((icon, index) => (
            <tr key={index}>
              <td>
                <img src={icon[1]} alt={icon[0]} width={size} height={size} />
              </td>
              <td>{icon[0]}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  
    return (
      <>
        <div className="proyect-box">
          <div>
            <h2>Technology</h2>
            <p>
              Throughout my experience, I have worked with various types of
              software, frameworks, and programming languages that served as tools
              to achieve the objectives in my projects. Therefore, this is a
              summary of some of them.
            </p>
            <div className="proyect-container2">
              {iconsinfo.map((category, index) =>
                renderTable(`${nameCategory[index]}`, category)
              )}
            </div>
            <div>
              <br></br>
              <br></br>
              Icons available at{" "}
              {iconsinfo.flatMap((category) =>
                category.map((icon, index) => (
                  <React.Fragment key={index}>
                    <a href={icon[2]}>{icon[0]}</a>
                    {index < category.length - 1 && ", "}
                  </React.Fragment>
                ))
              )}
              . Thanks to <a href="https://icons8.com">Icons8</a>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default Tecnology;