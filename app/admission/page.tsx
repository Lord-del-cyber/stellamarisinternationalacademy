import AdmissionProcess from "@/components/admission/admission-process"
import Requirements from "@/components/admission/requirements"
import InquiryForm from "@/components/admission/inquiry-form"

export default function Admission() {
  return (
    <main>
      <AdmissionProcess />
      <Requirements />
      <InquiryForm />
    </main>
  )
}
