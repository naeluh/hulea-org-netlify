import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Router } from "next/router";
import ErrorMessage from "./ErrorMessage";
import Head from "next/head";

const POSTS_PER_PAGE = 10;

function handleClick(event, id, url) {
  event.preventDefault();
  Router.push({
    pathname: `/work/${url}`,
    asPath: `/work/${url}`
  });
}

function PostList({ data: { loading, error, webs }, title, extraClass }) {
  if (error) return <ErrorMessage message="Error loading posts." />;
  if (webs && webs.length) {
    return (
      <section className={extraClass}>
        <Head>
          {title === undefined ? (
            <>
              <title>Work</title>
              <meta name="title" content="Nick Hulea's Work and Projects" />
              <meta
                name="description"
                content="Nick Hulea's Work and Projects"
              />
            </>
          ) : (
            ""
          )}
        </Head>
        {title === undefined ? <h1>Work</h1> : ""}
        <ul>
          {webs.map((post, index) =>
            post.URL !== title ? (
              <li key={index + 1}>
                <a props={post._id} href={`/work/${post.Data.Link}`}>
                  {post.Image !== null /* && title === undefined */ ? (
                    <span
                      className={`imgHero ${extraClass}__image`}
                      style={{
                        backgroundImage: `url(https://strapi.hulea.org/${
                          post.Image.url
                        })`
                      }}
                    />
                  ) : (
                    ""
                  )}
                  {title === undefined ? (
                    <h2>{post.Title}</h2>
                  ) : (
                    <p>{post.Title}</p>
                  )}
                </a>
              </li>
            ) : (
              ""
            )
          )}
        </ul>
        <style jsx>{`
          * {
            box-sizing: border-box;
          }
          a {
            position: relative;
            display: block;
          }
          ul {
            margin: 0;
            padding: 0;
            list-style: none;
          }
          li {
            margin-bottom: 2em;
          }
          h2 {
            position: absolute;
            bottom: 5px;
            left: 25px;
            padding: 20px 30px;
            color: #fff;
            background-color: #111;
          }
          p {
            position: absolute;
            background-color: #111;
            color: #fff;
            padding: 4px 8px;
            left: 0;
            text-align: center;
            letter-spacing: -2px;
            font-weight: 700;
            top: 0;
          }
          @media only screen and (max-width: 480px) {
            h2 {
              font-size: 36px;
              padding: 10px 15px;
              width: 100%;
            }
            p {
            }
          }
        `}</style>
      </section>
    );
  }
  return <div>Loading</div>;
}

export const allPosts = gql`
  query {
    webs {
      _id
      Title
      Image {
        url
        ext
        provider
        size
      }
      Description
      Data
      URL
      createdAt
      updatedAt
    }
  }
`;

export const allPostsQueryVars = {
  skip: 0,
  first: POSTS_PER_PAGE
};

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
export default graphql(allPosts, {
  props: ({ data }) => ({
    data,
    loadMorePosts: () => {
      return data.fetchMore({
        variables: {
          skip: data.allPosts.length
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult;
          }
          return Object.assign({}, previousResult, {
            // Append the new posts results to the old one
            allPosts: [...previousResult.allPosts, ...fetchMoreResult.allPosts]
          });
        }
      });
    }
  })
})(PostList);
