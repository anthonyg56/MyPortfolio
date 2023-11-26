import { BLOCKS, Document, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';

interface Props {
  description: Document | undefined;
}

export default function RichText(props: Props) {

  const renderOptions: Options = {
    renderText: text => {
      return text.split('\n').flatMap((text, i) => [i > 0 && <br />, text]);
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => <a className='rich-text-a' href={node.data.uri}>{children}</a>,
      [BLOCKS.HEADING_5]: (node, children) => <h5 className='rich-text-h5'><strong>{children}</strong></h5>,
      [BLOCKS.HEADING_3]: (node, children) => <h3 className='rich-text-h3'>{children}</h3>,
      [BLOCKS.PARAGRAPH]: (node, children) => <p className='rich-text-p'>{children}</p>,
      [BLOCKS.UL_LIST]: (node, children) => <ul className='mt-0 mb-[10px] pl-[40px] list-disc' >{children}</ul>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li style={{ color: "#5f6a8f" }}>{children}</li>,
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const AssetComponent = ({ url, alt, caption }: { url: string, alt: string, caption: string }) => (
          <figure className='max-w-[100%] relative table mx-auto clear-both mb-[10px]'>
            <div className='max-w-100% inline-block'>
              <img src={"https:" + url} alt={alt} className='w-full max-w-full align-middle inline-block' />
            </div>
            <figcaption className='table-caption caption-bottom text-center mt-[5px] border-box'>{caption}</figcaption>  
          </figure>
        )

        return <AssetComponent url={node.data.target.fields.file.url} alt={node.data.target.fields.title} caption={node.data.target.fields.description} />
      }
    },
  };

  return (
    <div>
      {props.description ? documentToReactComponents(props.description, renderOptions) : null}
    </div>
  )
}
