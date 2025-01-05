import AjincodewLayout from '@/layouts/AjincodewLayout'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  return (
    <>
      <AjincodewLayout />
    </>
  )
}
