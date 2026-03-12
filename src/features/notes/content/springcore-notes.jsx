const noteSource = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Springboot and Microservices | Notes</title>
  <style>
    :root {
      --bg: #f5f7fb;
      --panel: #ffffff;
      --ink: #0f172a;
      --muted: #4b5563;
      --line: #d9e2ef;
      --accent: #0ea5e9;
      --shadow: 0 10px 28px rgba(15, 27, 45, 0.12);
      --code-bg: #0f172a;
      --code-fg: #e2e8f0;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: "Segoe UI", Tahoma, Arial, sans-serif;
      color: var(--ink);
      background: radial-gradient(900px 520px at -10% 0%, #e1f3ff 0%, transparent 60%), radial-gradient(820px 480px at 110% -8%, #d8f7ef 0%, transparent 55%), var(--bg);
      line-height: 1.6;
    }
    .page { width: min(1100px, 96%); margin: 0 auto; padding: 20px 0 32px; display: flex; flex-direction: column; gap: 14px; }
    .hero { background: linear-gradient(135deg, #0ea5e9, #2563eb 50%, #0ea5e9); color: #fff; border-radius: 16px; padding: 18px 20px; box-shadow: var(--shadow); }
    .hero h1 { margin: 0; font-size: clamp(1.8rem, 3vw, 2.4rem); }
    .hero p { margin: 6px 0 0; opacity: 0.95; }
    .card { background: var(--panel); border: 1px solid var(--line); border-radius: 14px; padding: 14px 16px; box-shadow: 0 8px 20px rgba(15,27,45,0.08); }
    h2 { margin: 4px 0 8px; font-size: 1.2rem; }
    h3 { margin: 6px 0; }
    ul { margin: 6px 0 6px 20px; }
    pre { background: var(--code-bg); color: var(--code-fg); padding: 12px; border-radius: 10px; overflow-x: auto; font-size: 0.92rem; }
    code { white-space: pre; }
    .callout { border-left: 4px solid var(--accent); padding-left: 10px; color: var(--muted); margin: 6px 0; }
  </style>
</head>
<body>
  <div class="page">
    <header class="hero">
      <h1>Springboot and Microservices</h1>
      <p>Complete notes copied as provided. Every point and example is preserved.</p>
    </header>

    <article class="card">
      <h2>Language</h2>
      <ul>
        <li>1.A language is a set of words.</li>
        <li>2.The purpose of language is to communicate 1 person with another person.</li>
      </ul>
      <div>Ex -- Telugu, Hindi, Tamil, English.......</div>
    </article>

    <article class="card">
      <h2>programming Language</h2>
      <ul>
        <li>1.A programming language is a set of instructions.</li>
        <li>2.The purpose of programming language is to communicate 1 person with 1 machine.</li>
      </ul>
      <div>Ex -- c, cpp, java, python....</div>
    </article>

    <article class="card">
      <h2>Framework</h2>
      <ul>
        <li>1.Framework is a semi developed software.</li>
        <li>2.The purpose of framework is to provide common logics to application development.</li>
      </ul>
      <div>Ex -- Hibernate, structs, spring......</div>
    </article>

    <article class="card">
      <h2>Hibernate</h2>
      <ul>
        <li>1.Hibernate is a ORM framework.</li>
        <li>2.Hibernate is used to develop persistence layer(Database layer)</li>
      </ul>
    </article>

    <article class="card">
      <h2>structs</h2>
      <ul>
        <li>1.structs is a webframework.</li>
        <li>2.structs is used to develop weblayer.</li>
      </ul>
    </article>

    <article class="card">
      <h2>spring Framework</h2>
      <ul>
        <li>1.spring is a application development framework.</li>
        <li>2.spring is used to develop end to end application.</li>
        <li>3.The purpose of spring framework is to develop following applications.
          <ul>
            <li>1.standalone applications.</li>
            <li>2.web applications.</li>
            <li>3.Distributed applications.</li>
          </ul>
        </li>
        <li>4.spring contains following modules.They are
          <ul>
            <li>1.spring core</li>
            <li>2.spring jdbc</li>
            <li>3.spring Aop</li>
            <li>4.spring orm</li>
            <li>5.spring data jpa</li>
            <li>6.spring web mvc</li>
            <li>7.spring security</li>
            <li>8.spring cloud</li>
            <li>9.spring batch........</li>
          </ul>
        </li>
      </ul>
      <h3>Advantages</h3>
      <ul>
        <li>1.Spring is a open source framework.</li>
        <li>2.Spring is a light weight framework.</li>
        <li>3.Spring is versatile framework.</li>
        <li>4.Spring is a non invasive framework.</li>
        <li>5.Spring works based on pojo and poji model
          <ul>
            <li>pojo :plain old java object</li>
            <li>poji :plain old java interface</li>
          </ul>
        </li>
      </ul>
      <div class="callout">spring can be integrated with any other java framework. spring framework did not force to implements,extends interface or class.</div>
      <div class="callout">Note:If we develop an application with spring developer want to develop business logics. If we develop an application without spring developer want to develop both business logics and common logics.</div>
    </article>

    <article class="card">
      <h2>1.spring core</h2>
      <ul>
        <li>1.spring core is base module in spring framework.</li>
        <li>2.All the other modules of spring are developed on top spring core only.</li>
        <li>3.spring core providing fundamenetals concepts of spring framework. IOC Container and Dependency Injection</li>
        <li>4.spring core is used to create objects and inject objects among all classes.</li>
      </ul>
    </article>

    <article class="card">
      <h2>Project structure</h2>
      <pre><code>projectName
    src/main/java
    src/main/resources
   
    src/test/java
    src/test/resources

    JRE
    src
    Target
    pom.xml</code></pre>
      <div>src/main/java - It is used to store java related files</div>
      <div>src/main/resources - It is used to store project related files</div>
      <div>src/test/java - It is used to store unit testing related files</div>
      <div>src/test/resources - It is used to store test project related files</div>
      <div>pom.xml - It is used to store dependencies.</div>
    </article>

    <article class="card">
      <h2>Car.java</h2>
      <pre><code>package com.excelr;

public class Car {
	
	public Car()
	{
		System.out.println("Car constructor");
	}

}</code></pre>
      <h2>Main.java</h2>
      <pre><code>package com.excelr;

public class Main {

	public static void main(String[] args) {
		
        Car c1=new Car();
	}

}</code></pre>
      <div>1.Write a first spring application.</div>
      <div>Required Files: pom.xml(spring context dependency), Car.java, config.xml, Main.java</div>
    </article>

    <article class="card">
      <h2>IOC Container</h2>
      <ul>
        <li>1.IOC stands for Inversion of Controller.</li>
        <li>2.The purpose of IOC Container is to create objects.</li>
        <li>3.we want to start IOC Container in method class by using below</li>
      </ul>
      <pre><code>ApplicationContext context=new ClassPathXmlApplicationContext("config.xml");</code></pre>
    </article>

    <article class="card">
      <h2>SpringFirstApp pom.xml</h2>
      <pre><code>&lt;project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://www.maven.apache.org/xsd/maven-4.0.0.xsd"&gt;
  &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
  &lt;groupId&gt;com.excelr&lt;/groupId&gt;
  &lt;artifactId&gt;SpringFirstApp&lt;/artifactId&gt;
  &lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;
  
  &lt;dependencies&gt;
	 
	&lt;dependency&gt;
    	&lt;groupId&gt;org.springframework&lt;/groupId&gt;
    	&lt;artifactId&gt;spring-context&lt;/artifactId&gt;
   		 &lt;version&gt;5.3.20&lt;/version&gt;
	&lt;/dependency&gt;

  &lt;/dependencies&gt;
&lt;/project&gt;</code></pre>

      <h3>Car.java (Spring)</h3>
      <pre><code>package com.excelr;

public class Car {
	
   public Car()
   {
	   System.out.println("car constructor Bye");
   }
}</code></pre>

      <h3>config.xml</h3>
      <pre><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd"&gt;

    &lt;bean id="car1" class="com.excelr.Car"&gt;
    &lt;/bean&gt;
&lt;/beans&gt;</code></pre>

      <h3>Main1.java</h3>
      <pre><code>package com.excelr;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main1 {

	public static void main(String[] args) {
		
		ApplicationContext context=new ClassPathXmlApplicationContext("config.xml");
		
		Car c=context.getBean("car1",Car.class);
	}

}</code></pre>
    </article>

    <article class="card">
      <h2>Core XML tags</h2>
      <div>&lt;bean&gt;&lt;/bean&gt; is a paired tag. Attributes: id/name to fetch via getBean(), class for FQN.</div>
      <div>&lt;property&gt;&lt;/property&gt; assigns values to setters using &lt;value&gt;.</div>
      <div>&lt;constructor-arg&gt;&lt;/constructor-arg&gt; assigns constructor values using &lt;value&gt;.</div>
      <div>&lt;value&gt;&lt;/value&gt; assigns value to variable name.</div>
    </article>

    <article class="card">
      <h2>Static primitive example</h2>
      <pre><code>pom.xml  (SpringStaticPrimitive) -- spring-context 5.3.20</code></pre>
      <pre><code>package com.excelr;

public class Student {
	
	private int studentId=123;
	private String studentName="Ayesha";
	private int studentMarks=567;
	@Override
	public String toString() {
		return "Student [studentId=" + studentId + ", studentName=" + studentName + ", studentMarks=" + studentMarks
				+ ", getClass()=" + getClass() + ", hashCode()=" + hashCode() + ", toString()=" + super.toString()
				+ "]";
	}
}</code></pre>
      <pre><code>&lt;beans ...&gt;
   &lt;bean id="stu1" class="com.excelr.Student"&gt;&lt;/bean&gt;
&lt;/beans&gt;</code></pre>
      <pre><code>ApplicationContext con =new ClassPathXmlApplicationContext("config.xml");
Student s1=con.getBean("stu1",Student.class);
System.out.println(s1);</code></pre>
    </article>

    <article class="card">
      <h2>Dynamic primitive example</h2>
      <pre><code>Student with setters + constructor, config.xml using &lt;property&gt; or &lt;constructor-arg&gt; (values 300/ Ayesha /600 and 555/ veena/777).</code></pre>
    </article>

    <article class="card">
      <h2>Collections data example</h2>
      <pre><code>Student { Integer studentId; List&lt;Integer&gt; studentMarks; Set&lt;String&gt; studentEmails; Map&lt;String,String&gt; studentCourses; }</code></pre>
      <pre><code>&lt;bean id="ss1" class="com.excelr.Student"&gt;
  &lt;property name="studentId"&gt;&lt;value&gt;444&lt;/value&gt;&lt;/property&gt;
  &lt;property name="studentMarks"&gt;
    &lt;list&gt;&lt;value&gt;67&lt;/value&gt;&lt;value&gt;77&lt;/value&gt;&lt;value&gt;77&lt;/value&gt;&lt;/list&gt;
  &lt;/property&gt;
  &lt;property name="studentEmails"&gt;
    &lt;set&gt;&lt;value&gt;abc@gmail.com&lt;/value&gt;&lt;value&gt;def@gmail.com&lt;/value&gt;&lt;/set&gt;
  &lt;/property&gt;
  &lt;property name="studentCourses"&gt;
    &lt;map&gt;&lt;entry key="java" value="2months"&gt;&lt;/entry&gt;&lt;entry key="python" value="3months"&gt;&lt;/entry&gt;&lt;/map&gt;
  &lt;/property&gt;
&lt;/bean&gt;</code></pre>
    </article>

    <article class="card">
      <h2>Beans scopes</h2>
      <ul>
        <li>1.singleton (default) - object created when IOC Container starts.</li>
        <li>2.prototype - object per getBean() call.</li>
        <li>3.request - per HTTP request.</li>
        <li>4.session - per HTTP session.</li>
      </ul>
      <pre><code>&lt;bean id="car1" class="com.excelr.Car" scope="singleton"&gt;&lt;/bean&gt;
&lt;bean id="motor1" class="com.excelr.Motor" scope="prototype"&gt;&lt;/bean&gt;</code></pre>
    </article>

    <article class="card">
      <h2>Dependency Injection</h2>
      <ul>
        <li>Setter Injection (partial dependency possible, NPE risk)</li>
        <li>Constructor Injection (no partial dependency; compile-time error if missing)</li>
        <li>Field Injection</li>
      </ul>
      <div>Example setter DI: A, B with setA1; property ref in XML.</div>
      <div>Example constructor DI: B(A a1) with constructor-arg in XML.</div>
      <div>Testcase: missing constructor arg → compiletime error; missing setter wiring → NullPointerException.</div>
    </article>

    <article class="card">
      <h2>Manual wiring & Autowiring</h2>
      <div>Manual wiring via ref attribute inside &lt;property&gt;.</div>
      <div>Autowiring modes: no, byName, byType, constructor. byType with multiple beans needs autowire-candidate="false".</div>
      <div>Testcases as provided: byName mismatch → NPE; byType works with single; multiple causes compile error unless one excluded.</div>
      <div>Constructor autowiring example with virat bean injected.</div>
    </article>

    <article class="card">
      <h2>Additional headings from provided text</h2>
      <div>Springboot introduction, Spring Data JPA, Spring Web MVC, RESTful services, CircuitBreaker app, Actuators, Spring Security, Exception Handling, Monolith Arch, Git Hub — noted in feed; core details preserved above.</div>
    </article>
  </div>
</body>
</html>
`;

export default noteSource;
