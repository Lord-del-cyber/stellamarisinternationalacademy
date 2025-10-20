import AdmissionProcess from "@/components/admission/admission-process"
import Requirements from "@/components/admission/requirements"
import InquiryForm from "@/components/admission/inquiry-form"
import SubjectsOffered from "@/components/admission/subject-offered"

export default function Admission() {
  return (
    <main>
      <AdmissionProcess />
      <SubjectsOffered />
      <Requirements />
      <InquiryForm />
    </main>
  )
}
