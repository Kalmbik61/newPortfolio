import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
const PDF = () => {
  const styles = StyleSheet.create({
    page: {
      padding: 20,
      border: [1, "solid", "black"],
    },
    head: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    fonts: {
      title: {
        fontSize: 26,
      },
      subtitle: {
        fontSize: 16,
        color: "grey",
      },
      body: {
        fontSize: 16,
        fontWieght: 200,
      },
    },
    body: {
      body: {
        flexDirection: "row",
        justifyContent: "space-between",
      },
      bodyStyleLeft: {
        marginTop: 20,
        flex: 0.7,
      },
      bodyStyleRight: {
        marginTop: 20,
        marginLeft: 15,
        flex: 0.3,
      },
      title: {
        fontSize: 26,
        marginLeft: 20,
        color: "#44A076",
        fontWieght: "bold",
      },
    },
    exp: {
      flexDirection: "row",
      subtitle: {
        fontSize: 16,
        flex: 0.6,
      },
      date: {
        fontSize: 14,
        color: "grey",
        maxWidth: 180,
        marginLeft: 30,
        flex: 0.4,
      },
      text: {
        fontSize: 14,
        fontWieght: "thin",
        marginTop: 15,
      },
    },
  });
  const data = [
    {
      id: 1,
      title: "Freelance",
      descr: ` Refinement, editing, bug fixes and addition of new features on
      various sites / extensions on freelance`,
      date: " Freelance | May 2020 - present",
    },
    {
      id: 2,
      title: "Portfolio website on React.js",
      descr: `Portfolio website development on React Js. In this project, the
      function of changing the theme of the entire site from light to
      dark is implemented through Redux and MaterialUI. The selection
      is recorded in localStorage and used on subsequent logins to the
      site. PS: This project was a little delayed, as I am
      simultaneously working on freelance and main job. PSS: The
      project is constantly being refined and improved.`,
      date: " Own project | December 2020 - present",
    },
    {
      id: 34,
      title:
        "Creating website for the repair and design of apartment and houses",
      descr: `A website for the repair and design of apartments was developed and assembled on the Tilda platform. 
      The site meets all the requirements of the customer. It is simple and intuitive for customers.`,
      date: " Freelance | April 2021 - April 2021",
    },
    {
      id: 33,
      title: "Creating website for sport's betting with React.js",
      descr: `The site was developed taking into account the needs of the client in React.js
      The site design fully complies with the client's requirement to use dark "notes". A distinctive feature of the site is the use of "neon" styles
      ADS services are connected to increase traffic. Advertising is tuned to residents of the USA
      Developed specifically on React, since the client is going to extend functionality like SPA`,
      date: " Freelance | March 2021 - March 2021",
    },
    {
      id: 3,
      title: "Extension for analyzing sales on Wildberries",
      descr: `The extension for the Chrome browser was typeset according to the provided layout. Layout using Bootstrap 4 library. 
      Added Chart.js library for using charts. The extension is entirely written in Vanilla JS. It is only the Alpha version
      of the application. In the future, it will be processed and assembled through React Js.`,
      date: "Freelance | February 2021 - February 2021",
    },
    {
      id: 4,
      title:
        "Changing the standard work of the cart and product cards in Tilda",
      descr: `  Changed the multiplicity of products, the step of adding an item to the cart and adding the "cm" inscription 
      by adding third-party code to Vanilla JS.`,
      date: "Freelance | January 2021 - January 2021",
    },
    {
      id: 5,
      title: "Integration of calculators on the Tilda website",
      descr: `Calculators have been integrated into the Tilda platform. Data from calculators are integrated into standard forms, 
      which allows you to preserve the ability to use the CRM system and other standard functions`,
      date: "Freelance | January 2021 - January 2021",
    },
    {
      id: 6,
      title: "Creating a website on Tilda",
      descr: `
      Creating a responsive website on the Tilda platform from 0 to design in Figma. Adding custom animations, maps with points
       of presence and contact information, feedback forms via Telegram.`,
      date: "Freelance | October 2020 - October 2020",
    },
    {
      id: 7,
      title: "Website for catering services in Sochi",
      descr: `Developed a project from 0 using React + bootstrap + router. A feedback form and a basket of orders have been developed. 
      As well as mini-sliders and menus. The project is currently frozen.`,
      date: "Freelance | September 2020 - September 2020",
    },
    {
      id: 8,
      title: "Online store on the Tilda platform",
      descr: `Development of a project design for an online store. Full project management and administration. 
      Instagram store running, smm promotion.`,
      date: "Freelance | June 2020 - August 2020",
    },
    {
      id: 9,
      title: "Finalization of the site of carpentry workshops",
      descr: `
      Finalization of the site of carpentry workshops before deployment. Adding new features to the site.
      Administration and maintenance of the project. Refinement was carried out using Vanilla JS.`,
      date: "Freelance | May 2020 - May 2020",
    },
    {
      id: 10,
      title: "Credit calculator",
      descr: `
      A loan calculator based on Vanilla JS with a visual display of the "body" of the loan has been developed.`,
      date: "Freelance | March 2020 - March 2020",
    },
  ];
  const skills = {
    tech: {
      title: "Technical",
      data: [
        {
          id: 1,
          text: "JavaScript/ES6+",
        },
        {
          id: 2,
          text: "React/ReactRouter/Redux",
        },
        {
          id: 3,
          text: "Vue (acquaintance)",
        },
        {
          id: 4,
          text: "PHP (acquaintance)",
        },
        {
          id: 5,
          text: "HTML/CSS",
        },
        {
          id: 6,
          text: "Bootstrap/Bulma/Materialize UI",
        },
        {
          id: 7,
          text: "Git/npm",
        },
        {
          id: 8,
          text: "Fetch/Rest API",
        },
        {
          id: 9,
          text: "Tilda Cms",
        },
      ],
    },
    soft: {
      title: "Soft skills",
      data: [
        {
          id: 1,
          text: "Easy to learn",
        },
        {
          id: 2,
          text: "Diligence and perseverance",
        },
        {
          id: 3,
          text: "Sociability",
        },
        {
          id: 4,
          text: "Responsibility",
        },
        {
          id: 5,
          text: "Desire to develop",
        },
        {
          id: 51,
          text: "Customer focus",
        },
        {
          id: 54,
          text: "Courtesy",
        },
      ],
    },
    lang: {
      title: "Languages",
      data: [
        {
          id: 1,
          text: "Russian (native)",
        },
        {
          id: 2,
          text: "English (Pre-intermediate)",
        },
      ],
    },
    hobbies: {
      title: "Hobbies",
      data: [
        {
          id: 1,
          text: "Airsoft",
        },
        {
          id: 2,
          text: "New technologies",
        },
        {
          id: 3,
          text: "Swimming",
        },
        {
          id: 4,
          text: "Billiards",
        },
        {
          id: 5,
          text: "Table tennis",
        },
      ],
    },
  };
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.head}>
          <View>
            <Text style={styles.fonts.title}>Pereverzev Evgeniy</Text>
            <Text style={styles.fonts.subtitle}>Frontend developer</Text>
          </View>
          <View>
            <Text>+7-961-300-14-49</Text>
            <Text>kalmbik61@gmail.com</Text>
            <Text>evdev-portfolio.web.app</Text>
            <Text>Rostov-on-Don</Text>
          </View>
        </View>
        <View style={styles.body.body}>
          <View style={styles.body.bodyStyleLeft}>
            <Text style={styles.body.title}>Work experience</Text>
            {data.map(({ descr, id, date, title }) => {
              return (
                <View style={{ marginTop: 20 }} key={id}>
                  <View style={styles.exp}>
                    <Text style={styles.exp.subtitle}>{title}</Text>
                    <Text style={styles.exp.date}>{date}</Text>
                  </View>
                  <Text style={styles.exp.text}>{descr}</Text>
                </View>
              );
            })}
          </View>
          <View style={styles.body.bodyStyleRight}>
            <Text
              style={{
                fontSize: 26,
                color: "#44A076",
                fontWieght: "bold",
                textAlign: "center",
              }}
            >
              Skills
            </Text>

            <Text
              style={{
                marginTop: 20,
                marginBottom: 10,
                fontSize: 20,
                fontWieght: "bold",
              }}
            >
              {skills.tech.title}
            </Text>
            {skills.tech.data.map(({ id, text }) => {
              return (
                <View key={id} style={{ matginTop: 20 }}>
                  <Text style={{ fontSize: 14, color: "grey", margin: 2 }}>
                    {text}
                  </Text>
                </View>
              );
            })}

            <Text
              style={{
                marginTop: 20,
                marginBottom: 10,
                fontSize: 20,
                fontWieght: "bold",
              }}
            >
              {skills.soft.title}
            </Text>
            {skills.soft.data.map(({ id, text }) => {
              return (
                <View key={id} style={{ matginTop: 20 }}>
                  <Text style={{ fontSize: 14, color: "grey", margin: 2 }}>
                    {text}
                  </Text>
                </View>
              );
            })}

            <Text
              style={{
                marginTop: 20,
                marginBottom: 10,
                fontSize: 20,
                fontWieght: "bold",
              }}
            >
              {skills.lang.title}
            </Text>
            {skills.lang.data.map(({ id, text }) => {
              return (
                <View key={id} style={{ matginTop: 20 }}>
                  <Text style={{ fontSize: 14, color: "grey", margin: 2 }}>
                    {text}
                  </Text>
                </View>
              );
            })}

            <Text
              style={{
                marginTop: 20,
                marginBottom: 10,
                fontSize: 20,
                fontWieght: "bold",
              }}
            >
              {skills.hobbies.title}
            </Text>
            {skills.hobbies.data.map(({ id, text }) => {
              return (
                <View key={id} style={{ matginTop: 20 }}>
                  <Text style={{ fontSize: 14, color: "grey", margin: 2 }}>
                    {text}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDF;
