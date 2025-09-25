import React, { useState } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Calendar } from "../components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover";
import { CalendarIcon, Edit, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "../hooks/use-toast";
import { cn } from "../lib/utils";
import { mockData, addMockData } from "../mock/mockData";

const MessageUs = () => {
  const [formData, setFormData] = useState({
    nama: "",
    tanggalLahir: null,
    jenisKelamin: "",
    pesan: ""
  });
  const [errors, setErrors] = useState({});
  const [data, setData] = useState(mockData);
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.nama.trim()) {
      newErrors.nama = "Nama harus diisi";
    } else if (formData.nama.trim().length < 2) {
      newErrors.nama = "Nama minimal 2 karakter";
    }

    // Birth date validation
    if (!formData.tanggalLahir) {
      newErrors.tanggalLahir = "Tanggal lahir harus diisi";
    }

    // Gender validation
    if (!formData.jenisKelamin) {
      newErrors.jenisKelamin = "Jenis kelamin harus dipilih";
    }

    // Message validation
    if (!formData.pesan.trim()) {
      newErrors.pesan = "Pesan harus diisi";
    } else if (formData.pesan.trim().length < 10) {
      newErrors.pesan = "Pesan minimal 10 karakter";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const newEntry = addMockData(formData);
      setData([...data, newEntry]);
      
      toast({
        title: "Berhasil!",
        description: "Data berhasil disimpan",
      });

      // Reset form
      setFormData({
        nama: "",
        tanggalLahir: null,
        jenisKelamin: "",
        pesan: ""
      });
      setErrors({});
    } else {
      toast({
        title: "Error!",
        description: "Mohon periksa kembali form Anda",
        variant: "destructive"
      });
    }
  };

  const handleDelete = (id) => {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
    
    toast({
      title: "Dihapus!",
      description: "Data berhasil dihapus",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Form Belajar</h2>
            <p className="text-gray-600 mb-8">Ini adalah website latihan pertama</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="nama" className="text-base font-medium">
                  Nama :
                </Label>
                <Input
                  id="nama"
                  type="text"
                  placeholder="Nama"
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  className={cn(
                    "mt-2",
                    errors.nama && "border-red-500 focus:border-red-500"
                  )}
                />
                {errors.nama && (
                  <p className="text-red-500 text-sm mt-1">{errors.nama}</p>
                )}
              </div>

              <div>
                <Label htmlFor="tanggalLahir" className="text-base font-medium">
                  Tanggal Lahir :
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full mt-2 justify-start text-left font-normal",
                        !formData.tanggalLahir && "text-muted-foreground",
                        errors.tanggalLahir && "border-red-500"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.tanggalLahir ? (
                        format(formData.tanggalLahir, "dd/MM/yyyy")
                      ) : (
                        <span>02/04/2023</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={formData.tanggalLahir}
                      onSelect={(date) => setFormData({ ...formData, tanggalLahir: date })}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                {errors.tanggalLahir && (
                  <p className="text-red-500 text-sm mt-1">{errors.tanggalLahir}</p>
                )}
              </div>

              <div>
                <Label className="text-base font-medium">Jenis Kelamin :</Label>
                <RadioGroup
                  value={formData.jenisKelamin}
                  onValueChange={(value) => setFormData({ ...formData, jenisKelamin: value })}
                  className="flex space-x-6 mt-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="laki-laki" id="laki-laki" />
                    <Label htmlFor="laki-laki">Laki-Laki</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="perempuan" id="perempuan" />
                    <Label htmlFor="perempuan">Perempuan</Label>
                  </div>
                </RadioGroup>
                {errors.jenisKelamin && (
                  <p className="text-red-500 text-sm mt-1">{errors.jenisKelamin}</p>
                )}
              </div>

              <div>
                <Label htmlFor="pesan" className="text-base font-medium">
                  Pesan :
                </Label>
                <Textarea
                  id="pesan"
                  placeholder="Pesan"
                  rows={4}
                  value={formData.pesan}
                  onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
                  className={cn(
                    "mt-2 resize-none",
                    errors.pesan && "border-red-500 focus:border-red-500"
                  )}
                />
                {errors.pesan && (
                  <p className="text-red-500 text-sm mt-1">{errors.pesan}</p>
                )}
              </div>

              <Button type="submit" className="w-full bg-gray-700 hover:bg-gray-800">
                Submit
              </Button>
            </form>
          </Card>

          {/* Data Table Section */}
          <Card className="p-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="text-left p-3 font-semibold">Nama</th>
                    <th className="text-left p-3 font-semibold">Tanggal Lahir</th>
                    <th className="text-left p-3 font-semibold">Jenis Kelamin</th>
                    <th className="text-left p-3 font-semibold">Pesan</th>
                    <th className="text-left p-3 font-semibold">Profile</th>
                    <th className="text-left p-3 font-semibold">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3">{item.nama}</td>
                      <td className="p-3">{item.tanggalLahir}</td>
                      <td className="p-3 capitalize">{item.jenisKelamin}</td>
                      <td className="p-3">{item.pesan}</td>
                      <td className="p-3">
                        <Button variant="link" className="text-blue-500 p-0">
                          <Edit className="w-4 h-4 mr-1" />
                          Klik Disini
                        </Button>
                      </td>
                      <td className="p-3">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Current Time Display */}
        <Card className="mt-8 p-6">
          <div className="text-right">
            <p className="text-sm text-gray-600">
              Current time: {new Date().toLocaleString("en-US", {
                weekday: "short",
                month: "short", 
                day: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                timeZoneName: "short"
              })}
            </p>
            <div className="mt-4 p-4 bg-gray-100 rounded text-left text-sm">
              <p><strong>Nama:</strong> Harfi Novian</p>
              <p><strong>Tanggal Lahir:</strong> 01/11/1995</p>
              <p><strong>Jenis Kelamin:</strong> Laki - Laki</p>
              <p><strong>Pesan:</strong> Log Belajar Duit Website</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MessageUs;