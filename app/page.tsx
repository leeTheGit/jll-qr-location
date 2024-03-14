import Image from "next/image";

export default function Home() {
  const url = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAYAAAB1PADUAAAAAklEQVR4AewaftIAAATYSURBVO3BQY4cSRIEQdNA/f/Lun30UwCJ9OI0uSaCP1K15KRq0UnVopOqRSdVi06qFp1ULTqpWnRSteikatFJ1aKTqkUnVYtOqhadVC06qVr0yUtA/iQ1E5AbNROQGzU3QL5JzQTkT1LzxknVopOqRSdViz5ZpmYTkCfU3Kh5AsiNmhsgk5o31GwCsumkatFJ1aKTqkWffBmQJ9Q8oeYGyKTmBsjfBMgTar7ppGrRSdWik6pFn/zlgExqngAyqXkCyI2a/ycnVYtOqhadVC365C+n5kbNE0AmNTdqngAyqfmXnFQtOqladFK16JMvU/ObAJnU3ACZ1DwB5JvU/CYnVYtOqhadVC36ZBmQPwnIpGYCMqmZgExqngAyqblRMwGZ1NwA+c1OqhadVC06qVqEP/IXAzKpeQLIE2pugDyh5l9yUrXopGrRSdWiT14CMqmZgNyomYA8oeYJIJuA3Kh5A8ik5gbIpGYCcqPmjZOqRSdVi06qFuGPLAJyo+abgExqJiCTmieAbFIzAXlDzRNAJjVvnFQtOqladFK16JNlaiYgN0DeUDOpeQLIpGYCcqPmBsik5gk1E5BJzQ2QGzWbTqoWnVQtOqla9MlLQCY1N0AmNROQSc0E5AbIjZobIN8E5EbNBOQGyKRmUnMDZFLzxknVopOqRSdViz755YBMaiYgN2omIJOaSc0mNW+oeQLIjZpJzaaTqkUnVYtOqhbhj7wA5EbNBGRS8wSQSc0NkDfUPAFkUjMBmdTcAJnUPAHkCTVvnFQtOqladFK16JOX1ExAbtRMQJ5QMwGZ1ExqJiA3aiYgk5oJyKRmAvIEkBsgk5rf5KRq0UnVopOqRfgjXwTkRs0EZFIzAZnU3ACZ1ExAbtRMQCY1bwCZ1NwAuVFzA2RSs+mkatFJ1aKTqkWfLAOyCcik5gbIpOYJNU8A2QRkUjOpmYBMQCY1f9JJ1aKTqkUnVYvwR74IyBtq3gAyqbkBMql5A8ikZgJyo2YCMqmZgDyhZtNJ1aKTqkUnVYs+eQnIpOZGzQRkUjMBmdRMQJ4AMqmZ1NwAmdRMQP5LaiYgk5pvOqladFK16KRq0ScvqdkEZFIzAblRcwNkE5AngExqboBMaiYgk5r/0knVopOqRSdVi/BHFgGZ1ExAbtRMQG7UTEAmNU8AmdQ8AeQ3U/NNJ1WLTqoWnVQtwh/5iwGZ1NwAmdRMQN5Q8wSQSc0TQDapeeOkatFJ1aKTqkWfvATkT1LzBJAbIDdqboA8AeQJIJOaJ9RMQCY1m06qFp1ULTqpWvTJMjWbgLyh5jdRMwG5UfNNQCY1b5xULTqpWnRSteiTLwPyhJon1NwAmdQ8AWRSM6mZgNyouQHyhpoJyI2aTSdVi06qFp1ULfrkLwdkUjOpmYBsAvIEkCfUTEBugExqboBMat44qVp0UrXopGrRJ/8YIDdqboBMam7UTEBu1GxScwNkUvNNJ1WLTqoWnVQtwh95AcikZhOQSc0NkCfUfBOQN9Q8AWRSMwGZ1Gw6qVp0UrXopGrRJ8uA/ElAbtRMQG6A3KiZgExqJjUTkBs1E5AbNZOa/9JJ1aKTqkUnVYvwR6qWnFQtOqladFK16KRq0UnVopOqRSdVi06qFp1ULTqpWnRSteikatFJ1aKTqkUnVYv+BzD1SCRWLN8DAAAAAElFTkSuQmCC";


  return (
    <main className="flex mt-20 min-h-screen flex-col items-start  p-24">
      <div className="font-mono text-sm lg:flex">
        <p className="text-lg fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          JLL QR Code Authentication by location 
        </p>
      </div>

      <div className="flex flex-col items-center w-full">
        <p className="pb-10 text-slate-400">Scan with phone and enter credentials</p>
        <div className="m-auto">
          <img src={`${url}`} alt="QR Code" />

        </div>
      </div>


    </main>
  );
}
