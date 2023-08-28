import Image from 'next/image'
//import CMS from 'decap-cms-app'


export default function Home() {
  //CMS.init()
  // Now the registry is available via the CMS object.
  //CMS.registerPreviewTemplate('my-template', MyTemplate)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl">Artlog Ed Prince</h1>
    </main>
  )
}
