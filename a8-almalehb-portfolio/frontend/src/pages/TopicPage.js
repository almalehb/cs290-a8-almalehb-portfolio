import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function TopicsPage() {

    useEffect(() => {
    }, []);

    return (
        <>
            <div>
                <h2>Web Development Concepts</h2>
                <nav class="local">
                    <a href="#webServers">Web Servers</a>
                    <a href="#frontEnd">Frontend Design</a>
                    <a href="#optimizingImages">Optimizing images</a>
                    <a href="#favicons">Favicons</a>
                    <a href="#css">Cascading Stylesheets</a>
                    <a href="#forms">Forms</a>
                    <a href="#express">Express</a>
                    <a href="#javascript">JavaScript</a>
                </nav>
                <article id="webServers">
                    <h3>Web Servers</h3>
                    <p>An <strong>index</strong> in the context of websites and servers refers to the designated homepage.
                        In
                        most
                        cases, the file
                        "index.html" inside the root directory would represent this homepage. Additionally, GET requests for
                        "/"
                        usually lead to this homepage as well. On some servers, the homepage might use "default.html",
                        "index.js",
                        or "index.php" instead.
                    </p>
                    <p>
                        When comparing the file's details on the web server versus the local computer using the browser's
                        <strong>Inspector</strong>
                        tools, there were many more request and response headers on the web server's version. The file also
                        takes
                        much longer to load on the remote version versus the local version (it took 57 ms versus 2 ms in one
                        test.)
                        There was also a warning on the local version about <strong>provisional headers</strong>. And
                        finally,
                        there
                        was a
                        "favicon.ico" file present on the remote version, which did not exist on the local version.
                    </p>
                    <p>
                        The favicon.ico file has a status 200 when accessing the web server's page, because the ENGR servers
                        are
                        successfully sending back a real favicon which is visible in the browser's tabs row. This webpage
                        does
                        not
                        contain or reference any <strong>CSS</strong> or <strong>JS</strong> file, because the website does
                        not have any styling or
                        interactivity
                        yet.
                        Therefore, main.css and main.js do not appear in the <strong>Inspector</strong>, and have no
                        corresponding
                        <strong>HTTP</strong> status.
                    </p>
                    <p>
                        This is the URL for the page:
                        https://web.engr.oregonstate.edu/~almalehb/CS290/a1-almalehb/index.html.
                        The
                        scheme is https. The subdomain is web.engr. The host domain is oregonstate.edu. The path to the
                        resource
                        is
                        /~almalehb/CS290/a1-almalehb/index.html.
                    </p>
                </article>
                <article id="frontEnd">
                    <h3>Frontend Design</h3>
                    <p>The concept of <strong>frontend design</strong> encompasses the visual design of the website,
                        including
                        its <strong>graphical user-interface</strong>, as well as the <strong>user experience</strong> that
                        the
                        user encounters while interacting with the website.</p>
                    <p>The <strong>five "E"s</strong> of usability are:</p>
                    <dl>
                        <dt><strong>Effective</strong></dt>
                        <dd>Meets the user's goals.</dd>
                        <dt><strong>Efficient</strong></dt>
                        <dd>Requires the smallest number of steps necessary to accomplish the goal.</dd>
                        <dt><strong>Easy to navigate</strong></dt>
                        <dd>Intuitive for first-time users.</dd>
                        <dt><strong>Error-free</strong></dt>
                        <dd>Avoids common errors and pitfalls.</dd>
                        <dt><strong>Enjoyable</strong></dt>
                        <dd>Engaging to use and meets the needs of its audience.</dd>
                    </dl>
                    <p><strong>Page layout tags</strong> are used to structure the webpage by breaking it up into different
                        parts. Despite looking similar to each other, each tag serves a different purpose. When used
                        effectively, these tags help machines such as <strong>screen readers</strong> and <strong>search
                            engine robots</strong> understand the
                        layout of the page.</p>
                    <p><strong>Anchors</strong> are used for linking to content:</p>
                    <ol>
                        <li>External content: the &lt;link&gt; tag can be used to link to external content, such as
                            stylesheets
                            and other assets. The anchor element &lt;a&gt; can be used to link to an external webpage.</li>
                        <li>Internal content: an internal &lt;a&gt; anchor can be used to link to internal content using the
                            content's ID.</li>
                        <li>Page-to-page: the &lt;nav&gt; tag is used along with a set of &lt;a&gt; anchors for navigating
                            between pages.</li>
                    </ol>
                </article>
                <article id="optimizingImages">
                    <h3>Optimizing images</h3>
                    <p>
                        The six major specifications for images are as follows.
                        <dl>
                            <dt><strong>Descriptive file name</strong></dt>
                            <dd>The file name should include as much information as possible to improve search engine
                                optimization. This can include who, what, when and where.</dd>
                            <dt><strong>Small file size</strong></dt>
                            <dd>Reducing file sizes as much as possible is necessary to improve load time.</dd>
                            <dt><strong>Exact dimensions</strong></dt>
                            <dd>Cropping is necessary to avoid loading unnecessarily large images.</dd>
                            <dt><strong>Correct file format</strong></dt>
                            <dd>Photos usually use .JPG. .GIF and 8-bit .PNG are used for line-art images such as icons. When
                                transparency is needed, 24-bit .PNG is used. .SVG is used for two-dimensional, interactive, or
                                animated images.</dd>
                            <dt><strong>Reduced resolution</strong></dt>
                            <dd>Monitor specifications have a <strong>pixels per inch</strong> rating between 72 and 300+, so it
                                is useful to provide multiple image sizes.</dd>
                            <dt><strong>Color Mode</strong></dt>
                            <dd><strong>RGB</strong> is used for .PNG, .JPG, .SVG, and .WebP, and <strong>Indexed</strong> is
                                used for .GIF.</dd>
                        </dl>
                    </p>
                </article>
                <article id="favicons">
                    <h3>Favicons</h3>
                    <p>
                        Browsers use favicons by displaying them in browser tabs, bookmarks, and other places. They are used
                        primarily to identify or launch websites and applications. .PNG, .SVG, .GIF, and .ICO file formats
                        can all be used for favicons. For best results, they need to be supplied in multiple sizes such as
                        16x16, 32x32, 192x192, and 512x512. Favicons help enhance bookmarks by making them visually
                        identifiable. To use them, the &lt;head&gt; section of the page should include a &lt;link&gt; with
                        an "icon" rel attribute, as well as an appropriate type, sizes, and href.
                    </p>
                </article>
                <article id="css">
                    <h3>Cascading Stylesheets</h3>
                    <p>
                        Stylesheets are used to redefine how the structure, content, and components of a webpage should
                        behave and look in order to improve the usability, readability, legibility, and to adhere to brand
                        requirements. There are five different ways to incorporate CSS.
                    </p>
                    <dl>
                        <dt><strong>External CSS Rules</strong></dt>
                        <dd>This is the preferred and most efficient method to use for an app or a website. It involves
                            using one or more external files with a .css file extension that would contain the rules for
                            defining different element selectors. These files would need to be linked in the global
                            &lt;head&gt; of a website. A global stylesheet can import additional stylesheets as needed.</dd>
                        <dt><strong>Embedded within a &lt;style&gt; tag</strong></dt>
                        <dd>This method and the following ones are typically used for one-off style changes only, and are
                            not typically recommended. Embedding within a &lt;style&gt;&lt;/style&gt; tag would involve
                            adding the CSS rules directly inside that tag.</dd>
                        <dt><strong>Inline within an element</strong></dt>
                        <dd>This can be done using an attribute and a value, which would go directly inside the tag
                            definition. For example: &lt;h1 style="color:orange" &gt;</dd>
                        <dt><strong>Inside JavaScript template literals</strong></dt>
                        <dd>This would be defined inside a JavaScript function. For example, we can define a variable with a
                            value of the style of an &lt;h1&gt; tag and change it to a specific color.</dd>
                        <dt><strong>In regular JavaScript</strong></dt>
                        <dd>We can directly manipulate the DOM in JavaScript by looking in the HTML document to find a
                            specific tag, then update its style to a specific value.</dd>
                    </dl>
                </article>
                <article id="forms">
                    <h3>Forms</h3>
                    <p>
                        6 major goals of accessible forms:
                    </p>
                    <dl>
                        <dt><strong>Provide clear instructions</strong></dt>
                        <dd>These instructions should be provided above the form and inside labels. Placeholders can also be
                            added for users with vision.</dd>
                        <dt><strong>Let users know why</strong></dt>
                        <dd>Explain the purpose for gathering the data, and indicate which fields are
                            <strong>required</strong>.
                        </dd>
                        <dt><strong>Set the first field to autofocus</strong></dt>
                        <dd>This helps users begin filling out the form quicker.</dd>
                        <dt><strong>Ensure each form control can be filled in using the keyboard</strong></dt>
                        <dd>This helps users who are unable to use a mouse or trackpad.</dd>
                        <dt><strong>Add tab indexing to complex forms</strong></dt>
                        <dd>This helps clarify the order for filling out the fields in the form.</dd>
                        <dt><strong>Ensure validation messages are screen readable</strong></dt>
                        <dd>This is not automatic, because built-in HTML browser messages are not screen-readable by
                            default.</dd>
                    </dl>
                    <p>Here are the major tags:</p>
                    <dl>
                        <dt><strong>&lt;form&gt;</strong></dt>
                        <dd>The &lt;form&gt; tag is used as an HTML container for forms that can be submitted. It can
                            include a variety of content, but cannot include other forms. Attributes for Form include
                            <strong>action</strong>, which is a URL that specifies where the data will be sent, and the
                            <strong>method</strong> attribute which is typically GET or POST.
                        </dd>
                        <dt><strong>&lt;fieldset&gt; and &lt;legend&gt;</strong></dt>
                        <dd>These tags help separate the form content into logical groups, making it more accessible.</dd>
                        <dt><strong>&lt;label&gt;</strong></dt>
                        <dd>This tag is typically paired with other controls to assist users with understanding the purpose
                            for gathering their data. The <strong>for</strong> attribute is used to match the label with the
                            corresponding control.</dd>
                        <dt><strong>&lt;input&gt;</strong></dt>
                        <dd>The most common tag for inputting data. The <strong>type</strong> attribute modifies the display
                            behavior of this tag and affects other available attributes. The <strong>name</strong> is
                            critical for this tag, because it signals to the server the source of the input.</dd>
                        <dt><strong>&lt;select&gt; and &lt;options&gt;</strong></dt>
                        <dd>Select is used for dropdown menus. It is paired with Options, which enumerate the rows in the
                            dropdown list. The <strong>name</strong> attribute is used to signal to the server the source of
                            the selection.</dd>
                        <dt><strong>&lt;textarea&gt;</strong></dt>
                        <dd>This tag is used to enter multiple lines of text, with a resizable text field.</dd>
                        <dt><strong>&lt;button&gt;</strong></dt>
                        <dd>This tag is used for submitting the form, and requires a user interaction such as a keyboard
                            button press, mouse click, voice command, or touch. It performs the <strong>action</strong>
                            attribute on the form.</dd>
                    </dl>
                    <p>Style Recommendations</p>
                    <ul>
                        <li><strong>Enhanced Fieldset Styling:</strong> It helps to change the default gray border of the
                            fieldset to a different color, type, and width. Adding margin and padding can improve visibility
                            and readability. In a sense, this provides "breathing room" for form elements and separates
                            different sections of the form.</li>
                        <li><strong>Legend Styling:</strong> Adding a unique font size and color helps distinguish the
                            legend from labels, and enhances readability.</li>
                        <li><strong>Label Positioning:</strong> Labels should be displayed above their controls and with a
                            smaller font size to enhance usability, especially on mobile devices.</li>
                        <li><strong>Accommodating Finger Size:</strong> Increasing the font size and padding for input
                            fields and buttons helps users interact more easily, especially on mobile devices.</li>
                        <li><strong>Adding Focus:</strong> updating the background color of the active form control helps
                            users understand where they are currently interacting.</li>
                        <li><strong>Required Fields:</strong> Styling required fields differently (such as with a green
                            border) helps to make it clear which fields must be filled out.</li>
                        <li><strong>Placeholder Styling:</strong> Changing placeholder text color can improve readability
                            and contrast, and provides a better user experience.</li>
                        <li><strong>Disabled and Enabled Inputs: </strong>Styling disabled and enabled inputs helps provide
                            visual cues to users about which form elements are currently interactible.</li>
                    </ul>
                </article>
                <article id="express">
                    <h3>Express</h3>

                    <dl>
                        <dt><strong>Node.js</strong></dt>
                        <dd>Node is an open-source and cross-platform runtime environment that lets you run JavaScript on
                            the server. It allows you to build server-side applications using JavaScript, and it comes with
                            a built-in package manager called npm. It also has a rich ecosystem of libraries or "modules"
                            that can be included in your projects as dependencies, providing pre-built functionality for a
                            wide range of needs.</dd>
                        <dt><strong>npm (Node Package Manager)</strong></dt>
                        <dd>This is the default package manager for Node.js. It lets developers install, share, and manage
                            packages of code from other developers, and manage their project dependencies. These packages
                            can range from simple helper libraries to complex frameworks. npm makes it easy to reuse code
                            from other developers, manage versions of these packages, and manage dependencies within a
                            project.</dd>
                        <dt><strong>Express.js</strong></dt>
                        <dd>This is a fast and minimalist web framework for Node.js. It simplifies writing server-side
                            applications and offers a simple way to handle common tasks that web applications need to do,
                            such as form handling, file uploads, the ability to get, post, and delete data, and defining the
                            ports and routes that data will take.</dd>
                    </dl>
                </article>
                <article id="javascript">
                    <h3>JavaScript</h3>
                    <p>Main Data Types</p>
                    <ul>
                        <li>Number</li>
                        <li>Boolean</li>
                        <li>String</li>
                        <li>Symbol</li>
                        <li>Object</li>
                        <li>Special values <strong>undefined</strong> and <strong>null</strong></li>
                    </ul>
                    <p>Objects are a set of name-value pairs. The names are called properties of the object. CRUD operations
                        can be performed on objects (create, read, update, and delete).</p>
                    <p>Arrays are a type of objects whose property names are the strings '0', '1', '2', and so on. 0-based
                        integer indexing can be used to access array elements, and arrays can store any JavaScript type.
                        When no element is present at an index, <strong>undefined</strong> is returned.</p>
                    <p>JSON, which is short for JavaScript Object Notation, is a popular format for transmitting data
                        between applications. When using JSON, we can map an object to a string, and can also create an
                        object from a string in the JSON format. This file format is programming language independent,
                        making it useful for exchanging data between apps regardless of their programming language.</p>
                    <p>Conditionals require attention in JavaScript, because automatic type conversion and "loose equality"
                        can lead to unexpected results. Therefore, it's better to use only Boolean values for conditionals.
                    </p>
                    <p>The <strong>if</strong> statement is similar to other languages, as it executes when the provided
                        expression evaluates to true. An <strong>else</strong> branch can optionally be added as well.</p>
                    <p><strong>Switch</strong> statements and the <strong>ternary operator</strong> are also available in
                        JavaScript, and behave the same as other languages.</p>
                    <p><strong>Object-Oriented Programming</strong> involves objects that have <strong>identity</strong>,
                        <strong>state</strong>, and <strong>behavior</strong>. It also revolves around inheritance, where
                        subclasses would inherit behavior from their parent classes. JavaScript is different from typical
                        Object-Oriented Programming languages in that objects can be created without declaring classes.
                        There is support for class syntax in modern JavaScript, and this is the recommended approach today
                        when using the language.
                    </p>
                    <p><strong>Functional Programming</strong> relies on functions being <strong>"first-class"</strong>
                        values. In other words, functions can be assigned to variables. They can be passed around to other
                        functions as arguments. And they can be returned by other functions. The functions that receive
                        other functions as arguments are called <strong>higher-order functions</strong>.</p>

                </article>
            </div>
        </>
    );
}

export default TopicsPage;