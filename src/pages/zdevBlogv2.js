import React from "react"
const zdevBlogv2 = () => {
  return (
    <main className="default-page">
      <div>
        <h2>TO DO LIST:</h2>
        <li>thing one</li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </div>

      <body>
        <h2>This is the BASELINE_ATTEMPT BRANCH</h2>

        <h2>Day 1 21oct2021</h2>
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

        <h2> Day 2 22oct2021 </h2>
        <div>started with CSS trying to get splash image to be full height</div>
        <li>
          **** how to make a full page background image that is full screen and
          resizes, focusing on the middle. use CSS. code: height: 100vh;
        </li>
        <li>
          trying to add an effect to image with CSS. it would transition
          correctly with on hover, but would snap back for hover off. function
          had two states. /nohover/ and /hover/ /nohover/ had a filter applied
          to 100% make it grayscale /hover/ had the filter set to 0%; making it
          have color .......... initially the transition was under /hover/ which
          I think would only activate the transition when hover on. it didnt
          know what to do for non hover. so I moved the transition to under the
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

        <h2>Day 3 23oct2021</h2>
        <p>learning about fonts</p>

        <h2>Day 4 25oct2021</h2>
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
          **** use capitalized first letter for components. just do it. if not
          it can bug out
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
        <h2>
          <span>Day 5 27oct2021</span>
        </h2>
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
          need an environment variable for both development (while running
          gatsby develop) and need one for production (when running a production
          command or something?). figure this more out later...
          https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/
        </li>

        <h2>
          <span>Day 6 28oct2021</span>
        </h2>
        <p>
          working with env api key, got it working. Note that when calling a
          variable, it is not a literal ``. so dont use that. Once it is
          connected to contentful, (check the terminal to see that it is reading
          entries or something) that means we are now fetching data from
          contentful. ****** and can now look it up in graphql. It should have
          the contentful items now
        </p>
        <p>
          contentful and graphql. go to ALL if want the full list of things. go
          to the single one if want just one, such as for programmatically
          creating pages
        </p>
        <p>
          so when pulling the entire list of stuff, think about what data want
          to show in a list. usually not all. also can sort the list, probably a
          good idea.{" "}
        </p>
        <h4>using graphql and contentful queries</h4>
        <p>
          good idea to send graphql queries into a component to use for later
        </p>
        <li>
          may need to make one type of article. in order to have it all in one.
          then just make the photo article special and handle it later
        </li>
        <li>
          successfully pulled a list of data from contentful. see (if it still
          exists) testpage.js
        </li>

        <h2>
          <span>Day 7 29oct2021</span>
        </h2>
        <p>can now pull in data from contentful</p>
        <p>need to learn how to make pages programmatically</p>
        <p>***************=================**********</p>
        <h2>making pages programmatically</h2>
        <p>
          make a file curly.js with parent level content, not the all one just
          the single one. such as. culryContentfulArticlePost.titleclurly.js -
          it must be exactly the same syntax. Q: does uppercase or lowercase
          matter???
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
          how to print curly braces inside some html. use `&-#-1-2-3`
          `&-#-1-2-5`
        </p>
        <p>
          currently there is a mismatch between the titles from contentful and
          the programmatic links that are made. contentful titles grabbed are
          not URL friendly as they have spaces in them. but the programmatic
          pages made are URL friendly. they are slugified (friendly URL).
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
          did it. -created pages with the content titles. -created links with
          the content titles. -they point to each other correctly
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
          then in query variables, give the variable a value. a value that
          matches one of the real data names. why only one? i dont know &#123;
          "title": "test post 2" &#125;
        </li>
        <li>
          then once the variable is working after running check. put the query
          into a component
        </li>

        <li>
          TODO: CONTINUE putting the graphql query into a component with the
          variables stuff. time = 7:22. because working on getting single
          article information but programmatically
        </li>

        <h2>
          <span>Day 8 2NOV2021</span>
        </h2>

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
          now can set up a unique page, with unique content per article, and
          made programmatically
        </li>
        <li></li>
        <li>
          !!! ran into issue with rich text from contentful. figuring this
          out...
        </li>

        <h2>Day 1: RESTART. 2NOV2021</h2>
        <p>
          today I learned about the importance of having version control and
          backups stable builds saved.
        </p>
        <p>
          redid connecting to contentful and pulling in allpost content. working
          on getting the destructured array data
        </p>
        <p>committed changes.</p>

        <h2>Day 2: more organized 3NOV2021</h2>
        <p>
          destructured and rendered basic array data. working on more advanced
          data, images, links, slugs
        </p>
        <p>pulling main text is okay.</p>
        <p>
          ISSUE: tested using main text with formatting like heading, bold,
          italics, link. these dont work.
        </p>
        <p>trying npm install gatsby-transformer-remark plugin</p>

        <p>
          ????????? keep trying to figure out the markdown thing or just use
          basic text? try for a few hours and if it does not work then go with
          basic text
        </p>
        <p>
          nah just go with the basic implementation. and DO NOT USE special
          markings or embedded in contentful
        </p>
        <p>
          okay, got in working from the ALL list, image, text, title, date,
          basic infomation
        </p>
        <p>NEXT, programmatically make pages for each article.</p>
        <p>********************* *****</p>

        <h2>Day 3: back to the main challenge 4NOV2021</h2>
        <p>
          now figuring how to create pages programmatically. deciding if want to
          do the method that cause errors last time. or another way. most
          tutorials use a different method
        </p>
        <p>
          the method that creates pages programmatically using curlies in the
          file is called. File System Route API. if you give a content thing
          from gql, gatsby knows to "infer" or drill down what item property you
          give it. such as. gqlContent.item1
        </p>
        <p>
          this is the one that got errors after deleting... trying it now...
        </p>
        <p>
          deleting was fine. to be careful, DO NOT DELETE PAGES UNTIL SERVER IS
          STOPPED.
        </p>
        <p>got data to post in a list. now try to get single data per page</p>

        <h2>Day 4: last part 5NOV2021</h2>
        <p>get single post per single page.</p>
        <p>
          go to gql but for single post, need to use arguments or dynamic var to
          choose
        </p>
        <p>
          got title, text, single image to work. for each page. trying to figure
          out multiple images per page
        </p>

        <p>
          dude. solved something complex on my own for the first time. that
          wasnt already in video tutorial form. finally. figured out how to map
          an array in an array. (nested array)
        </p>
        <p>##########################################</p>
        <p>
          I think it is ready. Solved the problems regarding the content. now
          have a good template in this branch of what to do.
        </p>
        <p>now to do the actual content in another branch.</p>

        <h2>Day 5: last part 8NOV2021</h2>
        <li>made content model</li>
        <li>made test posts</li>
        <li>
          made component to get All posts, each individual post, and all data
          associated
        </li>
        <li>have all the links and data set up</li>
        <li>now just working on CSS stylings for everything</li>
        <li>
          figuring out how to do the css grid thing. its a little complicated
        </li>
        <li>**** need to consider how there are grids inside a grid</li>

        <li>close to v 1.0</li>

        <h2>Day 6: CSS main page 9NOV2021 a</h2>
        <li>
          all posts now showing on home page. need to CSS the main posts into
          blocks. tried to use grid. looks like it should be flexbox.
        </li>
        <li>
          after will CSS the individual pages. should be easier. BUT, paragraphs
          not working correctly...
        </li>
        <li>then back to header and footer stuff</li>
        <li>
          OKAY, got the FLEXBOX working for list of posts. got hero image in a
          reasonable state.
        </li>
        <li>think about doing a navbar and a footer</li>

        <div></div>
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////// */}
        <h2>ACTIONS LIST</h2>
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
        <li>npm i slugify</li>
        <li>npm install normalize.css</li>

        <h4>
          make a component to receive the full list of posts from gql.
          AllPostsList
        </h4>
        <li>
          Make a capitalized component. and make a graphql query searching for
          all content of a type. we want to make a list of everything. Like a
          table of contents
        </li>
        <li>
          "make a variable to represent that gql query. in the syntax of: const
          gqlvariable = graphql `{"{"}GQL_QUERY_HERE{"}"}`
        </li>
        <li>
          "make another var that uses the function useStaticQuery and pass in
          the gqlvariable. (to read the gql query). var =
          useStaticQuery(gqlvar)"
        </li>
        <li>
          make another var to destructure the query array into the node parts we
          want. such as title, id, image, date
        </li>
        <li>
          make another component such as PostsLists to further breakdown(parse)
          certain content in the data. we'll just keep this component as the
          graphql grabber that gets the main list of things.
        </li>
        <li>
          {" "}
          in the return, call the new component and SEND it a new variable that
          contains the OBJECT that is the destructured data.{" "}
          {"<PostsList VAR={DESTRUCTURED_DATA}"} called sendPosts
        </li>
        <li>import the Postslist component</li>

        <h4>
          making component to pull out data from the gql array. MAP. PostsList
        </h4>
        <li>
          we just passed in the COMPONENT PostLists, the OBJECT VARIABLE ARRAY
          sendPosts, in the new component, tell it where sendPosts should go .
          syntax like this. {"const PostsList = ({ sendPosts = [] }) => { "}
          {
            "const BREAKDOWN_COMP_NAME = ({ DESTRUCTURED_DATA_VAR = [INIT_AS_ARRAY] }) => { "
          }
        </li>
        <li>
          in the return, use the map function on the object variable array from
          graphql. map function will go to each item in an array and do a thing
          to each item. map function should have its own nested return.
        </li>
        <li>
          {
            "{VAR_ARRAY_BEING_WORKED.map((NEW_NAMED_MAPPED_VAR) => { stuff to do to each array item called NEW_NAMED_MAPPED_VAR })}"
          }
        </li>
        <li>
          specify what data OBJECTS to get from gql exactly.{" "}
          {"const {id,title} = allNodes"}
        </li>
        <li>
          test returning those objects. so, map will look at each item in array,
          destructure, then return those items.
        </li>
        <li>
          NOTE: the PostsList component doesnt render things by itself, it only
          works if passed into AllPostsLists. and then we render AllPostsLists.
          I think because that is where the gql data is.
        </li>

        <h4>working with more advanced gql data. images, links, slugs</h4>
        <li>drill down to the node, which we send to the list</li>
        <li>
          for the main list, can use {"{item1, item2, item3} = allNodes_VAR"}{" "}
          type of destructuring
        </li>
        <li>
          for other items that have more nested structure, can use the the other
          way. {"postText = allNodes.mainTextParent.mainTextchild"}
        </li>

        <h4>updating contentful</h4>
        <li>need to restart server to see changes</li>

        <h4>methods to destructure</h4>
        <li>thing1: {"{ thing 1}"} = data.content</li>

        <h4>***programmatically create pages***USING FILE SYSTEM ROUTE API</h4>
        <p>
          make a file with curlies.{" "}
          {"{SINGLE_CONTENT_PARENT_FROM_GQL.ITEM_WITH_NAME_WANTED"}
        </p>
        <li>new rule. DO NOT DELETE PAGES UNLESS SERVER IS STOPPED.</li>
        <li>
          **** when making programmatic pages, gatsby will auto pull in certain
          data. it will be stored in the object props. which we can console log
          and then destructure to get data from. This can be useful. esp for
          using as dynamic variable in gql.
        </li>

        <h4>making links with gatsby Link</h4>
        <li>
          the link function takes an argument called "to" in form for a string
          path. (it is in `` or "")
        </li>

        <h4>setting up URL, slugify</h4>
        <li>if we want to make some string a slug</li>
        <li>import slugify from "slugify"</li>
        <li>
          use the function slugify, which takes a string variable, can also give
          it arguments such as in {"{lower:true}"}
        </li>
        <li>
          looks like this{" "}
          {
            "--->const NewVariableWhichIsASlug = slugify(VarToBeSlugged, {option: value})<---"
          }
        </li>
        <div></div>

        <h4>arrays and keys</h4>
        <li>
          sometimes? things in arrays that are mapped out need a key. a key is
          thing that will associate with each array item. Like. Key = 1 ; Array
          item 1. Key = 2 ; array item 2.
        </li>
        <li>
          when un arraying something the key should be in the parent tag that
          wraps ALL of the lower level children
        </li>
        <li>
          (topLevelParent key = 123; (child1 stuff) (child2 stuff) (child3
          stuff))
        </li>
        <li>
          the lower level child do not need a key as long as the top level
          parent has a key to uniquely identify it
        </li>

        <h4>what are template literals, for slugs</h4>
        <li>
          tempalte literals are strings that allow substitutions. (aka a
          variable)
        </li>
        <li>probably literal strings dont usually allow substitutions</li>
        <li>
          template literals are "delimited" or identified back the backtick ``
        </li>
        <li>
          ***** the placeholder is expressed by
          {/* ----->${expression_or_variable}<----- */}
        </li>
        <li>
          and used in an example like this{" "}
          {/* "---->` string text ${expression_or_variable} string text`<-----" */}
        </li>
        <li>it is probably used in a folder path like this</li>
        <li> changingFileName = dynamic data thing</li>
        {/* <li>"------>`/folder1/folder2/${changingFileName}`<------"</li> */}

        <h4>when to use object or variable</h4>
        <li>
          for certain functions or tags, it will just take in a variable, such
          as slugify, will just take a variable. where in a html tag, it will
          print the literal thing entered unless it is made into an object, then
          the html tag will interpret that as a variable object
        </li>

        <h4>mapping a nested array</h4>
        <p> </p>
        <li>
          the component additionalMapImages is passed the sendPosts array, which
          is from gql that holds all the posts as NODES in the object array form
        </li>
        <li>
          then the sendPosts is mapped out and named allNodes, which does a
          thing (expression) to each item in the allNodes. it does a thing to
          each node
        </li>
        <li>We now have access to the items (children) below allNodes</li>
        <li>
          we can now map again if there is a nested array. HOWEVER we still need
          to say what the parent is. in this case
        </li>
        <li>parent = allNodes, child = additionalImages</li>
        <li>do allNodes.additionalImages.map and was named allAddImages</li>
        {/* const AdditionalMapImages = ({ sendPosts = [] }) => {
  console.log({ sendPosts })
  return (
    <main>
      <div>
        <p>we are trying to map out additional images</p>
      </div>
      <div>
        {sendPosts.map((allNodes) => {
          const { id, title } = allNodes
          return (
            <div key={id}>
              <p>this is the top level array of all nodes</p>
              <p>{title}</p>

              {allNodes.additionalImages.map((allAddImages) => {
                const { gatsbyImageData, id } = allAddImages
                return (
                  <div key={id}>
                    <p>this should be the objects in additional images</p>
                    <GatsbyImage image={gatsbyImageData} alt="LETS GOOOO" />
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </main>
  )
} */}

        <h4>get single dynamic gql content</h4>
        <li>
          use single gql, but use arguments "filter eq variable or dynamic var"
        </li>
        <li>
          now to get dynamic, pass in gql query, a variable, we need to init it.
        </li>
        <li>($title:String) variable and type. variable can be anything?</li>
        <li>then use it as the input to the argument</li>
        <li>
          test it using a query variable. (which simulates passing in a variable
          with a value)
        </li>
        <li>then in dynamic page component, put in the gql query</li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>

        <h2>CSS grids/flexbox</h2>
        <li>if want to format things inside a grid, need grid within a grid</li>
        <li>I THINK IT IS FLEX</li>
        <li>
          need to use flex box, elsewise it doesnt render nicely on mobile
        </li>
        <li></li>
        <li></li>

        {/* /////////////////////////////////////////////////////////////////////// */}
        <h2>fixes and errors</h2>
        <p>SITUATION: usually when updating gatsby or cli stuff</p>
        <p>
          ERROR: cannot be loaded because running scripts is disabled on this
          system. For more information, see about_Execution_Policies at.
        </p>
        <p>
          FIX: delete a file.
          ..localdisk/users/.../appdata/roaming/npm/gatsby.ps1 . the powershell
          script file
        </p>
      </body>
    </main>
  )
}

export default zdevBlogv2
