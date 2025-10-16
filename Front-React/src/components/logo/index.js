import React from "react";
import { LogoCaixa, LogoTitulo, LogoSubtitulo } from "./style";

export default function Logo({ size = "normal" }) {
  return (
    <LogoCaixa>
      <LogoTitulo className={size}>BANIF</LogoTitulo>
      <LogoSubtitulo>Seu banco para todos os momentos</LogoSubtitulo>
    </LogoCaixa>
  );
}
