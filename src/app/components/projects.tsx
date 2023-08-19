
import { TypeProject } from "@/@types/contentfull"
import ProjectItem from "./projectItem"
import * as Contentful from 'contentful'
import { TypeProjectSkeleton } from "@/@types/contentfull/TypeProject"
import { IAsset } from "@/@types/contentfull/Asset"

const token = process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN || ''
const spaceId = process.env.CONTENTFUl_SPACE_ID || ''

const client = Contentful.createClient({
  space: spaceId,
  accessToken: token as string
})

const getProjects = async () => {
  const projects = await client.getEntries<TypeProjectSkeleton>({ content_type: 'project' })
    .then((content) => {
      console.log(content)
      const items = content.items


      return items
    })
    .catch(err => console.log(err))

    return projects
}

export default async function Projects() {
  const data = await getProjects()
  
  const ProjectsMap = () => data ? data.map(({ fields }) => {
    console.log(fields.coverPhoto)
    return <ProjectItem name={fields.title} img={fields.coverPhoto as IAsset} slug={fields.slug} type={fields.category} />
  }) : null

  return (
    <div className='relative overflow-hidden pt-10 pb-10 md:pt-[60px] md:pb-[60px]'>
      <div className='w-full max-w-[1200px] mx-auto px-4'>
        <div className='z-[100] max-w-[770px] text-center flex-col items-center mb-[30px] mx-auto flex relative'>
          <h2 className='text-[28px] leading-[36px] md:text-[36px] md:leading-[46px]'>Recent Work</h2>
        </div>
        <div className="">
          <div className="w-full gap-x-[14px] gap-y-[14px] grid-rows-[auto] auto-rows-[minmax(auto, 1fr)] auto-cols-[1fr] grid grid-cols-[1fr] justify-items-center sm:grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr] md:justify-items-[normal]">
            <ProjectsMap />
          </div>
        </div>
      </div>
    </div>
  )
}
