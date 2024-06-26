import { Search, MoreHorizontal, ChevronsRight, ChevronsLeft } from 'lucide-react';
import { IconButton } from './icon-button';
import { TableHeader } from './table/table-header';
import { Table } from './table/table';
import { TableCell } from './table/table-cell';
import { TableRow } from './table/table-row';

export function Attendee() {
    return (
        <div className='flex flex-col gap-4'>
            <div className=" flex gap-3 items-center">
                <h1 className="text-2xl font-bold">Participantes</h1>
                <div className="px-3 py-1.5 border border-white/10 rounded-lg w-72 flex items-center gap-3">
                    <Search className='size-4 text-emerald-300'/>
                    <input type="text" placeholder="Buscar participantes..." className="bg-transparent flex-1  border-0 p-0 text-sm "/>
                </div>
            </div>
            
            <Table>
                <thead>
                    <tr className='border-b border-white/10'>
                        <TableHeader style={{ width: 48 }} >
                            <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10' />
                        </TableHeader>
                        <TableHeader >Código</TableHeader>
                        <TableHeader >Participantes</TableHeader>
                        <TableHeader >Data de inscrição</TableHeader>
                        <TableHeader >Data do check-in</TableHeader>
                        <TableHeader style={{ width: 64 }} ></TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {
                        Array.from({ length: 8 }).map((_, i) => {
                            return (
                                <TableRow key={i}>
                                    <TableCell>
                                        <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10' />
                                    </TableCell>
                                    <TableCell>12345</TableCell>
                                    <TableCell>
                                        <div className='flex flex-col gap-1'>
                                            <span className='font-semibold text-white'>Hudson Sena</span>
                                            <span>hudson@gmail.com</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>7 dias atrás</TableCell>
                                    <TableCell>3 dias atrás</TableCell>
                                    <TableCell>
                                        <IconButton transparent>
                                            <MoreHorizontal/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <TableCell colSpan={3} className='py-3 px-4 text-sm'>
                            Mostrando 10 de 228 itens
                        </TableCell>
                        <TableCell colSpan={3} className='py-3 px-4 text-sm text-right'>
                            <div className='inline-flex items-center gap-8'>
                                <span>Página 1 de 23</span>
                                <div className='flex gap-1.5'>
                                    <IconButton >
                                        <ChevronsLeft className='size-4'/>
                                    </IconButton>
                                    <IconButton >
                                        <ChevronsLeft className='size-4'/>
                                    </IconButton>
                                    <IconButton >
                                        <ChevronsRight className='size-4'/>
                                    </IconButton>
                                    <IconButton >
                                        <ChevronsRight className='size-4'/>
                                    </IconButton>
                                </div>
                            </div>
                        </TableCell>
                    </tr>
                </tfoot>
            </Table>                
        </div>
    )
}