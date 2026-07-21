const policyLinks = [
  { label: "Giới thiệu", href: "https://iaa.uk.net/lien-he/" },
  { label: "Chính sách sử dụng", href: "https://iaa.uk.net/dieu-khoan-dich-vu/" },
  { label: "Chính sách bảo mật", href: "https://iaa.uk.net/chinh-sach-bao-mat/" },
  { label: "Chính sách Cookies", href: "https://iaa.uk.net/chinh-sach-cookies/" },
];

export function IaaFooter() {
  return (
    <footer className="mt-[30px] bg-[#5a5a5a] text-[#f1f1f1] md:mt-[30px]">
      <div className="mx-auto grid max-w-[1080px] grid-cols-1 px-[15px] py-[31px] md:grid-cols-3 md:px-0">
        <div className="pb-6 md:px-[15px]">
          <h4 className="mb-[12px] text-[11px] font-bold uppercase leading-[18px]">
            IAA - Insight And Advice
          </h4>
          <ul className="space-y-[8px] text-[11px] leading-[18px] text-[#e6e6e6]">
            <li>Chịu trách nhiệm nội dung bởi CTCP Truyền thông GIOBRAND.</li>
            <li>170 Bùi Thị Xuân, P. Phạm Ngũ Lão, Q.1, TP.HCM.</li>
            <li>xinchao@giobrand.vn</li>
          </ul>
          <div className="mt-[14px] flex gap-[6px]">
            <a
              aria-label="X"
              className="flex size-[26px] items-center justify-center rounded-full border border-[rgba(255,255,255,0.55)] text-[10px] font-bold text-white transition-colors hover:bg-white hover:text-[#5a5a5a]"
              href="https://x.com/iaavietnam"
            >
              X
            </a>
            <a
              aria-label="Pinterest"
              className="flex size-[26px] items-center justify-center rounded-full border border-[rgba(255,255,255,0.55)] text-[10px] font-bold text-white transition-colors hover:bg-white hover:text-[#5a5a5a]"
              href="https://www.pinterest.com/iaainternational/"
            >
              P
            </a>
          </div>
        </div>

        <div className="pb-6 md:px-[15px]">
          <h4 className="mb-[12px] text-[11px] font-bold uppercase leading-[18px]">
            Chính Sách
          </h4>
          <ul className="space-y-[8px] text-[11px] leading-[18px]">
            {policyLinks.map((link) => (
              <li key={link.href}>
                <a className="transition-colors hover:text-white" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:px-[15px]">
          <h4 className="mb-[12px] text-[11px] font-bold uppercase leading-[18px]">
            Giới thiệu
          </h4>
          <p className="mb-[14px] text-[11px] leading-[18px] text-[#e6e6e6]">
            IAA là trang giới thiệu, đánh giá và khuyên dùng các sản phẩm, dịch
            vụ các lĩnh vực mà bạn quan tâm.
          </p>
          <p className="text-[11px] leading-[18px] text-[#e6e6e6]">
            Kết quả từ quá trình research chuyên sâu của IAA bao gồm doanh
            nghiệp sở hữu (tuổi đời, đánh giá từ khách hàng, quy mô,...)
          </p>
        </div>
      </div>
      <div className="bg-[#4f4f4f]">
        <div className="mx-auto max-w-[1080px] px-[15px] py-[14px] text-[10px] leading-[16px] text-[#bdbdbd] md:px-[15px]">
          Copyright 2025 © IAA - GIOBRAND AND CHBI
        </div>
      </div>
    </footer>
  );
}
