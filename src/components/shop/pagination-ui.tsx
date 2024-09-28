import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

type PaginationLinkProps = {
  pageNumber?: number;
  ellipsis?: boolean;
};

const PaginationUI = ({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const paginationPages: PaginationLinkProps[] = [];

  paginationPages.push({ pageNumber: 1 });

  if (currentPage > 3) {
    paginationPages.push({ ellipsis: true });
  }

  if (currentPage <= totalPages && currentPage > 2) {
    paginationPages.push({ pageNumber: currentPage - 1 });
  }

  if (currentPage >= 2 && currentPage < totalPages && totalPages !== 2) {
    paginationPages.push({ pageNumber: currentPage });
  }

  if (currentPage < totalPages - 1) {
    paginationPages.push({ pageNumber: currentPage + 1 });
  }

  if (currentPage < totalPages - 2) {
    paginationPages.push({ ellipsis: true });
  }

  paginationPages.push({ pageNumber: totalPages });

  //   [
  //     ...pages
  //       .slice(currentPage - 2 > 1 ? currentPage - 2 : 1, currentPage + 1)
  //       .map((pageNumber) => ({ pageNumber })),
  //     { ellipsis: true },
  //     ...pages.slice(-2).map((pageNumber) => ({ pageNumber })),
  //   ];

  // Add ellipsis if there are more than 5 pages

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem className="cursor-pointer">
          <PaginationPrevious
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          />
        </PaginationItem>
        {paginationPages.map((page, index) =>
          page.pageNumber ? (
            <PaginationItem
              key={index}
              onClick={() => page.pageNumber && onPageChange(page.pageNumber)}
              className="cursor-pointer"
            >
              <PaginationLink isActive={page.pageNumber === currentPage}>
                {page.pageNumber}
              </PaginationLink>
            </PaginationItem>
          ) : (
            <PaginationItem key={index}>
              <PaginationEllipsis />
            </PaginationItem>
          )
        )}

        <PaginationItem className="cursor-pointer">
          <PaginationNext
            onClick={() =>
              currentPage < totalPages && onPageChange(currentPage + 1)
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationUI;
