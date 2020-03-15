import { init } from 'netlify-cms-app';

// If we are not in the production environment, use the local version
// of Netlify CMS. This will cause the files to changes locally, rather
// than on the hosted git branch.
const localCms = process.env.NODE_ENV !== 'production';

init({
  config: {
    backend: {
      name: 'github',
      repo: 'trevorlang/hoegel-media-productions'
    },
    local_backend: localCms,
    media_folder: 'static/assets',
    public_folder: 'assets',
    collections: [
      {
        name: 'post',
        label: 'Post',
        slug: '{{slug}}',
        folder: 'content/posts',
        preview_path: 'portfolio/{{slug}}',
        editor: {
          preview: false
        },
        create: true,
        fields: [
          {
            name: 'type',
            label: 'Type',
            widget: 'hidden',
            default: 'post'
          },
          {
            name: 'template',
            label: 'Template',
            widget: 'hidden',
            default: 'Post'
          },
          {
            name: 'path',
            label: 'Path',
            widget: 'hidden',
            default: '/portfolio/{{slug}}'
          },
          {
            name: 'date',
            label: 'Date',
            widget: 'datetime'
          },
          {
            name: 'post_type',
            label: 'Post Type',
            widget: 'select',
            options: ['Video', 'Gallery'],
            default: ['Video']
          },
          {
            name: 'title',
            label: 'Title'
          },
          {
            name: 'body',
            label: 'Body',
            widget: 'markdown'
          }
        ]
      },
      {
        name: 'portfolio',
        label: 'Portfolio',
        folder: 'content/pages/portfolio',
        preview_path: 'portfolio',
        editor: {
          preview: false
        },
        create: false,
        fields: [
          {
            name: 'type',
            label: 'Type',
            widget: 'hidden',
            default: 'page'
          },
          {
            name: 'template',
            label: 'Template',
            widget: 'hidden',
            default: 'Portfolio'
          },
          {
            name: 'path',
            label: 'Path',
            widget: 'hidden',
            default: '/portfolio/'
          },
          {
            name: 'title',
            label: 'Title'
          },
          {
            label: 'Body',
            name: 'body',
            widget: 'markdown'
          }
        ]
      },
      {
        name: 'about',
        label: 'About',
        folder: 'content/pages/about',
        preview_path: 'about',
        editor: {
          preview: false
        },
        create: false,
        fields: [
          {
            name: 'type',
            label: 'Type',
            widget: 'hidden',
            default: 'page'
          },
          {
            name: 'template',
            label: 'Template',
            widget: 'hidden',
            default: 'About'
          },
          {
            name: 'path',
            label: 'Path',
            widget: 'hidden',
            default: '/about/'
          },
          {
            name: 'title',
            label: 'Title'
          },
          {
            label: 'Body',
            name: 'body',
            widget: 'markdown'
          }
        ]
      },
      {
        name: 'contact',
        label: 'Contact',
        folder: 'content/pages/contact',
        preview_path: 'contact',
        editor: {
          preview: false
        },
        create: false,
        fields: [
          {
            name: 'type',
            label: 'Type',
            widget: 'hidden',
            default: 'page'
          },
          {
            name: 'template',
            label: 'Template',
            widget: 'hidden',
            default: 'Contact'
          },
          {
            name: 'path',
            label: 'Path',
            widget: 'hidden',
            default: '/contact/'
          },
          {
            name: 'title',
            label: 'Title'
          },
          {
            label: 'Body',
            name: 'body',
            widget: 'markdown'
          }
        ]
      }
    ]
  }
});
