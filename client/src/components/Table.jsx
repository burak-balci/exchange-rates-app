import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable({ data, text, isSorted }) {
  const exchangeRates = data.data.Tarih_Date.Currency;


  const filtered = exchangeRates.filter((item) =>
    item.$.Kod.toLowerCase().includes(text.toLowerCase())
  );


  const a = exchangeRates.slice(0);
  isSorted
    ? a.sort(function (a, b) {
        return a.ForexBuying - b.ForexBuying;
      })
    : a.sort(function (a, b) {
        return b.ForexBuying - a.ForexBuying;
      });



  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Döviz Kodu</TableCell>
              <TableCell align="right">Birim</TableCell>
              <TableCell align="right">Döviz Cinsi</TableCell>
              <TableCell align="right">Döviz Alış</TableCell>
              <TableCell align="right">Döviz Satış</TableCell>
              <TableCell align="right">Efektif Alış</TableCell>
              <TableCell align="right">Efektif Satış</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {text
              ? filtered.map((item) => (
                  <TableRow
                    key={item.Isim}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {item.$.Kod}
                    </TableCell>
                    <TableCell align="right">{item.$.CrossOrder}</TableCell>
                    <TableCell align="right">{item.Isim}</TableCell>
                    <TableCell align="right">{item.ForexBuying}</TableCell>
                    <TableCell align="right">{item.ForexSelling}</TableCell>
                    <TableCell align="right">{item.BanknoteBuying}</TableCell>
                    <TableCell align="right">{item.BanknoteSelling}</TableCell>
                  </TableRow>
                ))
              : a.map((item) => (
                  <TableRow
                    key={item.Isim}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {item.$.Kod}
                    </TableCell>
                    <TableCell align="right">{item.$.CrossOrder}</TableCell>
                    <TableCell align="right">{item.Isim}</TableCell>
                    <TableCell align="right">{item.ForexBuying}</TableCell>
                    <TableCell align="right">{item.ForexSelling}</TableCell>
                    <TableCell align="right">{item.BanknoteBuying}</TableCell>
                    <TableCell align="right">{item.BanknoteSelling}</TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
