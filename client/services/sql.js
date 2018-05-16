exports.postsSQL = function(options) {
  let query = null;
  if (options.time && options.size) {
    query = `(time: "${options.time}", size: ${options.size})`;
  } else if (options.size) {
    query = `(size: ${options.size})`;
  }
  return {
    query: `{
      posts${query} {
        posts {
          cover
          desc
          date
          title
          readCount
          commentCount
          _id
          tags
          url
          time
        }
        end
      }
    }`
  };
};

exports.postSQL = function(options) {
  return {
    query: `{
      post(url: "${options.url}") {
        _id
        title
        tags
        content
        date
        next {
          title
          url
        }
        index {
          tag
          content
          anchor
        }
        previous {
          title
          url
        }
        comments {
          _id
          name
          time
          content
          refTo {
            _id
            name
            content
          }
        }
      }
    }`
  };
};

exports.archivesSQL = function() {
  return {
    query: `{
      posts {
        posts {
          title
          _id
          tags
          url
          year
          day
        }
        end
      }
    }`
  };
};

exports.infoSQL = function() {
  return {
    query: `{
      info {
        _id
        html
        comments {
          _id
          name
          time
          content
          refTo {
            _id
            name
            content
          }
        }
      }
    }`
  };
};

exports.projectsSQL = function() {
  return {
    query: `{
      projects {
        projects {
          _id
          title
          href
          html
        }
      }
    }`
  };
};