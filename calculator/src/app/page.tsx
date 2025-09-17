import Calculator from "@/components/Calculator";
import pageStyles from "./page.module.css";

export default function Home() {
  return (
    <main className={pageStyles.mainContentContainer}>
      <Calculator containerClassName={pageStyles.calculatorPanel}/>
    </main>
  );
}
