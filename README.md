# Atlan Frontend Task:

**Link to the application:  [https://sql-editor-by-atlan.vercel.app/](https://sql-editor-by-atlan.vercel.app/)**


# Overview
The given application is developed as a frontend task for **Atlan** which allows users to interact with an online SQL editor. Users can input and execute SQL queries, then analyze and interpret the obtained results seamlessly within the application.

## Framework, Libraries and Technologies Used
1) Javascript Framework used:  **NextJs 14**. <br>
 Reasons why I chose NextJs:<br>
 a) SEO-Friendly and Server-Side Rendering (SSR)<br>
 b) Efficient Client-Side Routing<br>
 c) Built-in API Routes<br>
 d) Optimized Performance<br>
 e) Built on ReactJs only, and recommended in ReactJs Docs.<br>
 
2) Major Libraries Used:<br>
	a) **Material-UI** - For Built-in React components, based on Google's Material Design principles.<br>
	b) **react-resizable-panels** - For customized and user-friendly layout.<br>
	c) **react-use-downloader** - For downloading Table data in JSON and CSV format. <br>
	d) **Monaco** - For Sql code editor, as it is a powerful and feature-rich code editor provided by Microsoft. (also used by VS code)<br>

3) **Major Features Included:** <br>
a) **Code Editor** with **SQL support**, **Auto completion**, **Syntax highlighting** and with dark and light theme.<br>
b) **Pagination**: Application can handle **huge** amounts of data, as the data is divided into pages, also giving the option to change amount of pages per page.<br>
c) **Downloading of Data:** User can download table data in **JSON** and **CSV** formats <br>
d)  **Resizable Layout:** Application offers customizable and resizable layout.<br>
e) **Dark and Light Mode** <br>
f) **Recent Queries Executed and Analytics section.** <br>
h) **Skeleton Layout for better User Experience** <br>

4) **Data:** The data used in the application is obtained from [https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind/data/csv](https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind/data/csv), a github repository for mock data.
5) **Available Queries:**<br>
    `SELECT * FROM order_details;`<br>
    `SELECT * FROM order`<br>
    `SELECT * FROM categories;`<br>
    `SELECT * FROM customers;`<br>
    `SELECT * FROM employee_territories;`<br>
    `SELECT * FROM employees;`<br>

6) **Perfomance Analysis of application:**
Used **Page Speed Insights** (https://pagespeed.web.dev/) for performance analysis<br>
![](public/assets/Screenshots/load-metrics.png)
![](public/assets/Screenshots/overall-performance.png)

7) **Optimizations:**<br>
a) Automatic Code Splitting and Dynamic Imports by NextJs <br>
b) Image Optimization <br>
c) Server-Side Rendering (SSR) <br>

8) **Screenshots**<br>
![](public/assets/Screenshots/application-dark-mode.png)
![](public/assets/Screenshots/application-light-mode.png)

   

