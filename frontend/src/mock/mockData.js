// Mock data for the application
export const mockData = [
  {
    id: "1",
    nama: "Ada Lovelace",
    tanggalLahir: "December 10, 1815",
    jenisKelamin: "perempuan",
    pesan: "Belajar Buat Website"
  },
  {
    id: "2", 
    nama: "Grace Hopper",
    tanggalLahir: "December 9, 1906",
    jenisKelamin: "perempuan",
    pesan: "Hello World"
  },
  {
    id: "3",
    nama: "Margaret Hamilton", 
    tanggalLahir: "August 17, 1936",
    jenisKelamin: "perempuan",
    pesan: "Test Dulu"
  },
  {
    id: "4",
    nama: "Joan Clarke",
    tanggalLahir: "June 24, 1917", 
    jenisKelamin: "laki-laki",
    pesan: "Selalu Semangat"
  }
];

// Function to add new data (simulating API call)
export const addMockData = (formData) => {
  const newEntry = {
    id: Date.now().toString(),
    nama: formData.nama,
    tanggalLahir: formData.tanggalLahir ? 
      formData.tanggalLahir.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric", 
        year: "numeric"
      }) : "",
    jenisKelamin: formData.jenisKelamin,
    pesan: formData.pesan
  };
  return newEntry;
};