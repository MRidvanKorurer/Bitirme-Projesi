import React from 'react'
import TableItem from './TableItem'

const Table: React.FC = () => {

  return (
    <section className="container mx-auto  font-mono z-20">
        <div className="w-full overflow-hidden rounded-lg shadow-lg">
            <div className="w-full overflow-x-auto">
                <table className="w-full">
                    <thead>
                    <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                        <th className="px-4 py-3">Araç Tipi</th>
                        <th className="px-4 py-3">Plaka</th>
                        <th className="px-4 py-3">Giriş Tarihi</th>
                        <th className="px-4 py-3">Çıkış</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white">
                        <TableItem />
                    </tbody>
                </table>
            </div>
        </div>
    </section>
  )
}

export default Table