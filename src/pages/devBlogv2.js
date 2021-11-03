import React from "react"
const devBlogv2 = () => {
  return (
    <main>
      <h1>Day 1 21oct2021</h1>
      <div>
        - tried to choose a starter - went with the basic hello world,
        essentially blank, to learn - loaded it up, tried to run plugins,
        wouldnt worked - then tried to correct plugins, kept getting errors -
        version 3 gatsby starters began to not show up on the gatsby pages
        anymore - they were making the migration happen TODAY - decided to
        change to version 4 - struggled to figure out how to upgrade, since no
        tutorials since it is new - upgraded to v4 - looked for the v4
        starters,but because v4 was still new the starters did not have the
        correct files to run yet - took a while to realize that - decided to
        just go with gatsby new - is working - got an image to show up
      </div>
      <div>
        theres just so much stuff to fall into holes. /////// need to focus on
        only learning the things I need to learn
      </div>
      <br></br>

      <h1> Day 2 22oct2021 </h1>
      <div>started with CSS trying to get splash image to be full height</div>
      <li>
        **** how to make a full page background image that is full screen and
        resizes, focusing on the middle. use CSS. code: height: 100vh;
      </li>
      <li>
        trying to add an effect to image with CSS. it would transition correctly
        with on hover, but would snap back for hover off. function had two
        states. <br /> /nohover/ and /hover/ /nohover/ had a filter applied to
        100% make it grayscale /hover/ had the filter set to 0%; making it have
        color .......... initially the transition was under /hover/ which I
        think would only activate the transition when hover on. it didnt know
        what to do for non hover. so I moved the transition to under the
        nohover. which would trigger when the filter state changed. ; from
        hover.
      </li>
      <li>
        CSS goes in order? bottom most takes precedence if there is a repeated
        variable?
      </li>
      <li>use CSS position sticky for nav bar?</li>
      <li>
        figured out a lot of stuff for the hero image, mostly a lot of little
        settings
      </li>
      <h4>to do list</h4>
      <li>get regular article1 into formatted</li>
      <li>
        get photo blog into formatted, pictures that can be anysize, but also
        stack with each other if allowable
      </li>
      <li>get articles to show up on home page</li>
      <li>make a container layout component</li>

      <h1>Day 3 23oct2021</h1>
      <p>learning about fonts</p>

      <h1>Day 4 25oct2021</h1>
      <p>learning about margins and padding and border</p>
      <li>element has a container</li>
      <li>padding is the space within that container to the content</li>
      <li>margin is the space outside of that container to other elements</li>
      <li>border is the "frame"</li>
      <br></br>
      <p>
        children prop. it represents what WILL be nested in the component. and
        can use to tell where to render future nested things
      </p>
      <p>test paragraph</p>
      <p>
        {" "}
        **** use capitalized first letter for components. just do it. if not it
        can bug out
      </p>
      <p>
        for StaticImage, apply the container (like 55vh) directly to the
        staticimage
      </p>
      <p>
        for css, use without . to target global html elements like h3. but can
        also specify only h3 elements that have span by doing "h3 span"
      </p>
      <p>
        h2 has prebuilt default margins. it is = 0.83rem... or something liek
        that
      </p>
      <h1>
        <span>Day 5 27oct2021</span>
      </h1>
      <p>finished template for typical article, working on photo blog</p>
      <p>did the basic layout for types of pages</p>
      <li>need to connect to contentful</li>
      <li>trying to get the API key</li>
      <h6>contentful</h6>
      <li>content management is giving write access.</li>
      <li>content delivery gives read only access to data</li>
      <li>content preview shows only content to self</li>
      <li>
        it looks like just use the content delivery one. yup just the content
        delivery one is OK. do not need content management key
      </li>
      <li>make the delivery key in contentful</li>
      <li>
        **** first test the contentful connection by just pasting in the
        delivery API key to the gatsby config, then npm start. if there are no
        errors, then the connection to contentful is OK
      </li>
      <li>need to make environment variable to hide the key</li>
      <li>
        need an environment variable for both development (while running gatsby
        develop) and need one for production (when running a production command
        or something?). figure this more out later...
        https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/
      </li>

      <h1>
        <span>Day 6 28oct2021</span>
      </h1>
      <p>
        working with env api key, got it working. Note that when calling a
        variable, it is not a literal ``. so dont use that. Once it is connected
        to contentful, (check the terminal to see that it is reading entries or
        something) that means we are now fetching data from contentful. ******
        and can now look it up in graphql. It should have the contentful items
        now
      </p>
      <p>
        contentful and graphql. go to ALL if want the full list of things. go to
        the single one if want just one, such as for programmatically creating
        pages
      </p>
      <p>
        so when pulling the entire list of stuff, think about what data want to
        show in a list. usually not all. also can sort the list, probably a good
        idea.{" "}
      </p>
      <h4>using graphql and contentful queries</h4>
      <p>good idea to send graphql queries into a component to use for later</p>
      <li>
        may need to make one type of article. in order to have it all in one.
        then just make the photo article special and handle it later
      </li>
      <li>
        successfully pulled a list of data from contentful. see (if it still
        exists) testpage.js
      </li>

      <h1>
        <span>Day 7 29oct2021</span>
      </h1>
      <p>can now pull in data from contentful</p>
      <p>need to learn how to make pages programmatically</p>
      <p>***************=================**********</p>
      <h2>making pages programmatically</h2>
      <p>
        make a file curly.js with parent level content, not the all one just the
        single one. such as. culryContentfulArticlePost.titleclurly.js - it must
        be exactly the same syntax. Q: does uppercase or lowercase matter???
      </p>
      <li>so make the file with curlycontentfulContentHerecurly.js</li>
      <li>
        in the file name the component something different, normal name like
        ArticlePost
      </li>
      <li>
        doing that SHOULD make a bunch of pages programmatically based on the
        titles with - inbetween words. CAUTION. deleting the
        &#123;contentfulArticlePost.title&#125;.js WILL MESS THINGS UP. DONT
        KNOW HOW TO FIX THIS
      </li>
      <p>
        how to print curly braces inside some html. use `&-#-1-2-3` `&-#-1-2-5`
      </p>
      <p>
        currently there is a mismatch between the titles from contentful and the
        programmatic links that are made. contentful titles grabbed are not URL
        friendly as they have spaces in them. but the programmatic pages made
        are URL friendly. they are slugified (friendly URL).
      </p>
      <li>
        so need to slugify the links which are not friendly to match the pages
        with friendly URLs
      </li>
      <li>npm i slugify</li>
      <li>
        import slugify, call it in the component you want to make a slugify
        title in
      </li>
      <li>replace the link /$ with the slugnametitle. should be okay now.</li>
      <li>
        did it. -created pages with the content titles. -created links with the
        content titles. -they point to each other correctly
      </li>
      <li>
        now need to query to get specific content for each specific page.
        because last time we just got all the data in a list. we only want one
        each time now, because we want to individual data for individual page
      </li>
      <li>do so with query varialbes in GQL</li>
      <li>start with the content post. single one. not the ALL version</li>
      <li>
        choosing a field without the ID will pull a random one. remember the
        field without : is a data. the field with: is an argument, meaning we
        can put rules.
      </li>
      <li>
        so we can control what data we get in the non ALL graphQL by using
        arguments and inputting what data we want
      </li>
      <p>+++++++++++++++++++++++++++++++++++++++++</p>
      <li>
        give the graphQL, for single item(non ALL) field, a better query name
        (instead of my query)
      </li>
      <li>
        we can pass in variables into the GQL query... so "query
        getSingleArticle($title:String) " initialize the variable. use $ to
        signify it is a varialble called title and that it is a string type.
      </li>
      <li>
        use the new varialbe as the argument selector in the query. so.
        contentfulArticle(title: eq:$title)
      </li>
      <li>
        then in query variables, give the variable a value. a value that matches
        one of the real data names. why only one? i dont know &#123; "title":
        "test post 2" &#125;
      </li>
      <li>
        then once the variable is working after running check. put the query
        into a component
      </li>

      <li>
        TODO: CONTINUE putting the graphql query into a component with the
        variables stuff. time = 7:22. because working on getting single article
        information but programmatically
      </li>

      <h1>
        <span>Day 8 2NOV2021</span>
      </h1>

      <p>
        duhhh, in GQL the query variables is just to test a variable in the
        graphql. when we take the gql query statement into our code, the
        variable in gql MUST match the variable we want to pass into from the
        code
      </p>

      <li>GQL: $title</li>
      <li>code: props.param.title</li>
      <li>the two match</li>

      <li>
        {" "}
        after doing this, we will now get specific data per contentful content
        per graphql query
      </li>
      <li>
        now can set up a unique page, with unique content per article, and made
        programmatically
      </li>
      <li></li>
      <li>
        !!! ran into issue with rich text from contentful. figuring this out...
      </li>

      <h1>Day 1: RESTART. 2NOV2021</h1>
      <p>
        today I learned about the importance of having version control and
        backups stable builds saved.
      </p>

      <h1>ACTIONS LIST</h1>
      <h4>fresh start</h4>
      <li>navigate to a folder to contain website files</li>
      <li>run gatsby new</li>

      <h4>connecting contentful, already have API key</h4>
      <li>npm install gatsby-source-contentful</li>
      <li>modify gatsby-config per doc</li>
      <li>
        fill in API key and space id. test run server first. Check grahpql for
        contentful. "if server runs okay, OK"
      </li>
      <li>
        make environmental files IN ROOT folder. create .env.development and
        .envproduction
      </li>
      <li>make the variable key</li>
      <li>check .gitignore that it ignores .env</li>
      <li>
        in gatsby config, add the "require" code that tells to use an env
        variable{" "}
      </li>
      <li>replace the accesstoken with the variable</li>

      <h4>more plugins</h4>
      <li>
        npm install gatsby-plugin-image gatsby-plugin-sharp
        gatsby-source-filesystem gatsby-transformer-sharp
      </li>
      <li>gatsby-source-filesystem</li>
    </main>
  )
}

export default devBlogv2
