import prismicDOM from 'prismic-dom';

const Elements = prismicDOM.RichText.Elements;

export default function (type, element, content, children) {
  switch (type) {
    case Elements.heading1:
      return `<h1 class="prismic-heading">${children.join('')}</h1>`;

    case Elements.heading2:
      return `<h2 class="prismic-heading">${children.join('')}</h2>`;

    case Elements.heading3:
      return `<h3 class="prismic-heading">${children.join('')}</h3>`;

    case Elements.heading4:
      return `<h4 class="prismic-heading">${children.join('')}</h4>`;

    case Elements.heading5:
      return `<h5 class="prismic-heading">${children.join('')}</h5>`;

    case Elements.heading6:
      return `<h6 class="prismic-heading">${children.join('')}</h6>`;

    case Elements.paragraph:
      return `<p class="prismic-text">${children.join('')}</p>`;

    case Elements.preformatted:
      return `<pre class="prismic-pre">${children.join('')}</pre>`;

    case Elements.strong:
      return `<strong class="prismic-bold">${children.join('')}</strong>`;

    case Elements.em:
      return `<em>${children.join('')}</em>`;

    case Elements.listItem:
      return `<li class="prismic-list__item">${children.join('')}</li>`;

    case Elements.oListItem:
      return `<li class="prismic-list__item">${children.join('')}</li>`;

    case Elements.list:
      return `<ul class="prismic-list">${children.join('')}</ul>`;

    case Elements.oList:
      return `<ol class="prismic-list">${children.join('')}</ol>`;

    case Elements.embed:
      return (`
        <div data-oembed="${element.oembed.embed_url}"
          data-oembed-type="${element.oembed.type}"
          data-oembed-provider="${element.oembed.provider_name}"
        >
          ${element.oembed.html}
        </div>
      `);

    case Elements.label:
      const label = element.data.label ? ` class="${element.data.label}"` : '';
      return `<span ${label}>${children.join('')}</span>`;

    case Elements.span:
      return content ? content.replace(/\n/g, "<br />") : '';

    default:
      return null;
  }
};